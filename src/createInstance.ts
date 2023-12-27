import axios, { AxiosRequestConfig, CreateAxiosDefaults } from "axios";
import { useRequestQuery } from "./requestQuery";

export const createRequestQueryInstance = (axiosParams: CreateAxiosDefaults) => {
  const requestQueryInstance = axios.create(axiosParams);
  function useRequestQueryInstance(requestQueries: AxiosRequestConfig) {
    return useRequestQuery(requestQueries, requestQueryInstance);
  }
  return { requestQueryInstance, useRequestQueryInstance };
};
