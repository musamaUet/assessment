// base.service.js

import { ROUTES } from "@/constants/routes";
import axios from "axios";

const Config = process.env.VITE_PUBLIC_API_URL || "http://localhost:3017/api";

export class HttpService {
  constructor() {
    this.CancelToken = axios.CancelToken;
    this.source = this.CancelToken.source();

    if (HttpService.getToken()) {
      axios.defaults.headers["Authorization"] = `Bearer ${HttpService.getToken()}`;
    }

    axios.interceptors.response.use(undefined, function (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        localStorage.clear();
        window.location.href = ROUTES.LOGIN;
      }
      return Promise.reject(error);
    });
  }

  /**
   * Set Token On Header
   * @param {string} token
   */
  static setToken(token) {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  static getToken() {
    return localStorage.getItem("token") || "";
  }

  async get(url, params) {
    const res = await axios.get(`${Config}/${url}`, {
      params,
      cancelToken: this.source.token,
    });
    return res.data;
  }

  async post(url, body, options = {}) {
    const res = await axios.post(`${Config}/${url}`, body, {
      ...options,
      cancelToken: this.source.token,
    });
    return res.data;
  }

  async delete(url, params, data) {
    const res = await axios.delete(`${Config}/${url}`, { params, data });
    return res.data;
  }

  async put(url, body, params) {
    const res = await axios.put(`${Config}/${url}`, body, {
      ...params,
      cancelToken: this.source.token,
    });
    return res.data;
  }

  updateCancelToken() {
    this.source = this.CancelToken.source();
  }

  cancel() {
    this.source.cancel("Explicitly cancelled HTTP request");
    this.updateCancelToken();
  }
}