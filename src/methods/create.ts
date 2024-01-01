import axios, { CreateAxiosDefaults } from "axios";

export default function createMethod(axiosParams: CreateAxiosDefaults) {
  this.queryInstance = axios.create(axiosParams);
  return this;
}
