import axios, { CreateAxiosDefaults } from "axios";
import { RequestQueryType } from "../../type";

export default function createMethod(this: RequestQueryType, axiosParams: CreateAxiosDefaults) {
  this.queryInstance = axios.create(axiosParams);
  return this;
}
