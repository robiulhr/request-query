import { interceptorFuncType } from "./type";
import { isFunction, isObject } from "./utils";

type addInterceptorType = (type: "request" | "response", interceptor: () => interceptorFuncType | object) => void;

const addInterceptor: addInterceptorType = (type, interceptor) => {
  if (type !== "request" && type !== "response") return "";
  if (isObject(interceptor)) {
    // if the interceptor is an object
    if (type === "request") {
      console.log(this);
    } else if (type === "response") {
      console.log(this);
    }
  } else if (isFunction(interceptor)) {
    // if the interceptor is an function
  }
};

export default addInterceptor;
