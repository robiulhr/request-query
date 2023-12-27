import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

export type useAxiosReturnType<T> = {
  response: T | null;
  error: AxiosError | unknown;
  loading: boolean;
  cancelRequest?: (timeoutMs?: number) => void;
};

export type useRequestQueryType = <T>(axiosParams: AxiosRequestConfig, requestQueryInstance?: AxiosInstance) => useAxiosReturnType<T>;

export type interceptorFuncType = () => object;
