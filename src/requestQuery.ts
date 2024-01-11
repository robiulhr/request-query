import { AxiosInstance } from "axios";
import useInterceptor from "./methods/useInterceptor/useInterceptor";
import requestMethod from "./hooks/useRequest/useRequest";
import { RequestQueryType, createMethodType, useInterceptorType, useRequestType } from "./type";
import createMethod from "./methods/create/create";

if (process.env.NODE_ENV === "production") console.log = () => {};

class RequestQuery implements RequestQueryType {
  queryInstance: AxiosInstance | null = null;
  create: createMethodType = createMethod;
  request: useRequestType = requestMethod;
  use: useInterceptorType = useInterceptor;
}

const requestQuery = new RequestQuery();
export default requestQuery;
