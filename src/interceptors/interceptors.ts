import { AxiosError, AxiosRequestHeaders, AxiosResponse } from "axios";

/**
 * @param {any} messages - error messages
 * @returns Promise rejection with -messages array
 */
const parseError = (messages: AxiosError | AxiosResponse) => {
  if (messages) {
    if (messages instanceof Array) {
      return Promise.reject({ messages: messages });
    } else {
      return Promise.reject({ messages: [messages] });
    }
  } else {
    return Promise.reject({ messages: ["error"] });
  }
};

/**
 * Request interceptor
 */

export const authReqInterceptor = function () {
  return {
    successHandler: (request: AxiosRequestHeaders) => {
      const accessToken = localStorage.getItem("authToken");
      if (!accessToken) return Promise.reject("authToken not found.");
      request.headers.Authorization = `Bearer ${accessToken}`;
      request.headers.Accept = "application/json";
      request.headers["Content-Type"] = "application/json";
      return request;
    },
    errorHandler: (error: AxiosError) => {
      return Promise.reject(error);
    },
  };
};

/**
 * Response interceptor
 */

export const authResInterceptor = function () {
  return {
    successHandler: (response: AxiosResponse) => {
      console.log("got response");
      return response;
    },
    errorHandler: (error: AxiosError | any) => {
      console.warn("Error status", error);
      if (error.response) {
        if ((error.response?.data?.message as string) === "Unauthorized") {
          localStorage.removeItem("authToken");
          return (window.location.href = "/login"); // use the route navigator for spa
        } else if (error.response.status === 404) {
          // do something
          console.log("NOT FOUND");
        }
        return parseError(error.response);
      } else {
        return Promise.reject(error);
      }
    },
  };
};
