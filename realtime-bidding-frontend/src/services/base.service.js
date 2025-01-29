// base.service.ts

import { ROUTES } from "@/constants/routes";
import axios, { CancelTokenStatic, CancelTokenSource } from "axios";

const Config = process.env.VITE_PUBLIC_API_URL ?? "http://localhost:3017/api";

export class HttpService {
  CancelToken: CancelTokenStatic;
  source: CancelTokenSource;

  constructor() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();
    if (HttpService.getToken()) {

      axios.defaults.headers[
        "Authorization"
      ] = `Bearer ${HttpService.getToken()}`;
    }
    axios.interceptors.response.use(undefined, function (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        localStorage.clear();
        window.location.href = ROUTES.LOGIN as string;
      }

      return Promise.reject(error);
    });
  }

  /**
   * Set Token On Header
   * @param token
   */
  static setToken(token: string): void {
    axios.defaults!.headers!["Authorization"] = `Bearer ${token}`;
  }

  static getToken(): string {
    return localStorage.getItem("token") ?? "";
  }

  protected get = async (url: string, params?: any): Promise<any> => {
    const res = await axios.get(`${Config}/${url}`, {
      params,
      cancelToken: this.source.token,
    });
    return res.data;
  };

  protected post = async (
    url: string,
    body?: any,
    options = {}
  ): Promise<any> => {
    const res = await axios.post(`${Config}/${url}`, body, {
      ...options,
      cancelToken: this.source.token,
    });
    return res.data;
  };

  protected delete = async (
    url: string,
    params?: any,
    data?: any
  ): Promise<any> => {
    const res = await axios.delete(`${Config}/${url}`, { params, data });
    return res.data;
  };

  put = async (url: string, body?: any, params?: any): Promise<any> => {
    const res = await axios.put(`${Config}/${url}`, body, {
      ...params,
      cancelToken: this.source.token,
    });
    return res.data;
  };

  private updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel = () => {
    this.source.cancel("Explicitly cancelled HTTP request");
    this.updateCancelToken();
  };
}