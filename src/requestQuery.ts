import "./App.css";
import { AxiosInstance } from "axios";
import useInterceptor from "./methods/useInterceptor";
import createMethod from "./methods/create";
import requestMethod from "./methods/request";
if (process.env.NODE_ENV === "production") console.log = () => {};

class RequestQuery<T> {
  private queryInstance: AxiosInstance | null = null;
  create = createMethod;
  request = requestMethod;
  use = useInterceptor;
}
const requestQuery = new RequestQuery();
export default requestQuery;
