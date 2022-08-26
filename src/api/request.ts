import axios, { AxiosRequestConfig } from "axios";
interface BaseResponseModel {
  data?: unknown;
  status?: number;
}
interface BaseErrorModel {
  response: BaseResponseModel;
}
// import router from "@/router";
export function request(config: AxiosRequestConfig<unknown>) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: "http://localhost:8080/",
    // baseURL: "http://webook.starera.cn/",
    timeout: 10000,
  });
  // 请求拦截器配置
  instance.interceptors.request.use(
    (config: unknown) => {
      // config.headers.Authorization = window.sessionStorage.getItem('token')
      return config;
    },
    (error: unknown) => {
      console.log(error);
      // return Promise.error(error);
      return error;
    }
  );
  // 响应拦截器配置
  instance.interceptors.response.use(
    (response: BaseResponseModel) => {
      return response.data;
    },
    (error: BaseErrorModel) => {
      switch (error.response.status) {
        case 401:
          console.log("无权访问");
          // router.push({ path: "/login" });
          break;
        case 403:
          console.log("token过期啦");
          // router.push({ path: "/login" });
          break;
        case 404:
          console.log("404啦");
          // router.push({ path: "/404" });
          break;
        default:
          return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
  // 发送真正的网络请求
  return instance(config);
}
export default request;
