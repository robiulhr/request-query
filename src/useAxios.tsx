import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import environment from "./environments";

if (process.env.NODE_ENV === "production") console.log = () => {};

axios.defaults.baseURL = environment.baseUrl;

type useAxiosReturnType<T> = {
  response: T | null;
  error: AxiosError | unknown;
  loading: boolean;
  cancelRequest?: (timeoutMs?: number) => void;
};
type useAxiosType = <T>(axiosParams: AxiosRequestConfig) => useAxiosReturnType<T>;

export const useAxios: useAxiosType = <T,>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | unknown>();
  const [loading, setLoading] = useState(true);
  const abortControllerRef = useRef(new AbortController());
  const setTimeOutRef = useRef<number | null>(null);
  const cancelRequest = useCallback(
    (timeoutMs?: number) => {
      if (setTimeOutRef.current) {
        clearTimeout(setTimeOutRef.current);
        setTimeOutRef.current = null;
      }
      setTimeOutRef.current = setTimeout(() => {
        abortControllerRef.current.abort();
        clearTimeout(setTimeOutRef.current as number);
        setTimeOutRef.current = null;
      }, timeoutMs || 0);
    },
    [setTimeOutRef]
  );
  const fetchData = () => {
    axios
      .request({ ...axiosParams, signal: /**this is for cancelling the request */ abortControllerRef.current.signal /* we can also use AbortSignal.timeout(timeout) to timeout the request*/ })
      .then((res: AxiosResponse) => {
        setResponse(res.data);
      })
      .catch((err) => {
        // this will narrow the type :)
        // Access to config, request, and response
        if (axios.isAxiosError(err)) {
          if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(err.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", err.message);
          }
          console.log(err.config);
          setError(err.toJSON());
        } else {
          setError(err.toJson());
          // Just a stock error
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // custom hook returns value
  return { response, error, loading, cancelRequest };
};
