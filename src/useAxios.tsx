import { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import environment from "./environments";

axios.defaults.baseURL = environment.baseUrl;

export const useAxios = <T,>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | unknown>();
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    axios
      .request(axiosParams)
      .then((res: AxiosResponse) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // custom hook returns value
  return { response, error, loading };
};
