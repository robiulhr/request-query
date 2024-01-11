import { useInterceptorType } from "../../type";
import { isFunction, isObject } from "../../utils";

const useInterceptor: useInterceptorType = (type, interceptor) => {
  if (type !== "request" && type !== "response") return "";
  if (isObject(interceptor)) {
    // if the interceptor is an object
    if (type === "request") {
      console.log("request type");
    } else if (type === "response") {
      console.log("response type");
    }
  } else if (isFunction(interceptor)) {
    // if the interceptor is an function
  }
};

export default useInterceptor;
