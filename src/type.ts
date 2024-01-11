// types

import { AxiosError, AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from "axios";

export interface RequestQueryType {
  queryInstance: AxiosInstance | null;
  create: (axiosParams: CreateAxiosDefaults) => RequestQueryType;
  request: useRequestType;
  use: useInterceptorType;
  // Add other properties/methods as needed
}

export type requestReturnType<T> = {
  response: T | null;
  error: AxiosError | unknown;
  loading: boolean;
  cancelRequest?: (timeoutMs?: number) => void;
};

export type useRequestType = <T>(axiosParams: AxiosRequestConfig) => requestReturnType<T>;

export type createMethodType = (axiosParams: CreateAxiosDefaults) => RequestQueryType;

export type interceptorFuncType = () => RequestQueryType;

export type useInterceptorType = (type: "request" | "response", interceptor: () => interceptorFuncType | object) => void;
