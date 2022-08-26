import { AxiosRequestHeaders } from "axios";
import { request } from "./request";
interface ConfigModel {
  method: string;
  url: string;
  params?: unknown;
  data?: unknown;
  headers?: AxiosRequestHeaders;
}
const http = {
  get(url: string, params?: unknown) {
    const config: ConfigModel = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/octet-stream",
        "Access-Control-Allow-Origin": "*",
      },
    };
    if (params) config.params = params;
    return request(config);
  },
  post(url: string, params?: unknown) {
    const config: ConfigModel = {
      method: "post",
      url: url,
    };
    if (params) config.data = params;
    return request(config);
  },
  put(url: string, params?: unknown) {
    const config: ConfigModel = {
      method: "put",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
  delete(url: string, params?: unknown) {
    const config: ConfigModel = {
      method: "post",
      url: url,
    };
    if (params) config.params = params;
    return request(config);
  },
};
export default http;
