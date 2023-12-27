// import { useCallback, useEffect, useRef, useState } from "react";
// import "./App.css";
// import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
// import { useRequestQueryType } from "./type";
// import addInterceptor from "./addInterceptor";
// if (process.env.NODE_ENV === "production") console.log = () => {};

import { Component, ReactNode } from "react";

// export class RequestQuery {
//   private queryInstance: AxiosInstance;
//   create(axiosParams: CreateAxiosDefaults) {
//     this.queryInstance = axios.create(axiosParams);
//   }
//   request(axiosParams: AxiosRequestConfig, requestQueryInstance?: AxiosInstance) {
//     // check the axiosParams validity
//     // check the requestQueryInstance validity
//     const [response, setResponse] = useState<T | null>(null);
//     const [error, setError] = useState<AxiosError | unknown>();
//     const [loading, setLoading] = useState(true);
//     const abortControllerRef = useRef(new AbortController());
//     const setTimeOutRef = useRef<null | ReturnType<typeof setTimeout>>(null);
//     const cancelRequest = useCallback(
//       (timeoutMs?: number) => {
//         if (setTimeOutRef.current) {
//           clearTimeout(setTimeOutRef.current);
//           setTimeOutRef.current = null;
//         }
//         setTimeOutRef.current = setTimeout(() => {
//           abortControllerRef.current.abort();
//           clearTimeout(setTimeOutRef.current as ReturnType<typeof setTimeout>);
//           setTimeOutRef.current = null;
//         }, timeoutMs || 0);
//       },
//       [setTimeOutRef]
//     );
//     const fetchData = () => {
//       // if any requestQueryInstance provided use it || use axios
//       (requestQueryInstance || axios)
//         .request({ ...axiosParams, signal: /**this is for cancelling the request */ abortControllerRef.current.signal /* we can also use AbortSignal.timeout(timeout) to timeout the request*/ })
//         .then((res: AxiosResponse) => {
//           setResponse(res.data);
//         })
//         .catch((err) => {
//           // this will narrow the type :)
//           // Access to config, request, and response
//           if (axios.isAxiosError(err)) {
//             if (err.response) {
//               // The request was made and the server responded with a status code
//               // that falls out of the range of 2xx
//               console.log(err.response.data);
//               console.log(err.response.status);
//               console.log(err.response.headers);
//             } else if (err.request) {
//               // The request was made but no response was received
//               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//               // http.ClientRequest in node.js
//               console.log(err.request);
//             } else {
//               // Something happened in setting up the request that triggered an Error
//               console.log("Error", err.message);
//             }
//             console.log(err.config);
//             setError(err.toJSON());
//           } else {
//             setError(err.toJson());
//             // Just a stock error
//           }
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     };

//     useEffect(() => {
//       fetchData();
//     }, []);
//     // custom hook returns value
//     return { response, error, loading, cancelRequest };
//   }
//   addInterCeptor = addInterceptor;
// }

class ApiUtility extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      data: null,
      error: null,
    };
  }

  fetchData = async (url) => {
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data, loading: false, error: null });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  };

  setState = (newState) => {
    this.state = { ...this.state, ...newState };
    // User-defined callback for state updates
    this.onStateChange && this.onStateChange(this.state);
  };

  // Optional: Set a callback for state changes
  setOnStateChangeCallback = (callback) => {
    this.onStateChange = callback;
  };

  render() {
    return null;
  }
}

export default ApiUtility;
