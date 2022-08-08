/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'http://localhost:8080';

interface GetWithParams {
  url: string;
  config: any;
  callback: any;
}

export class HttpRequest {
  axios: AxiosInstance;

  constructor(baseURL = BASE_URL) {
    this.axios = axios.create({
      baseURL,
    });
  }

  async get<T>(url: string, options?: T) {
    const res = await this.axios.get(url, options);
    return res;
  }

  async post<T, K>(url: string, data: T, options?: K) {
    const response = await this.axios.post(url, data, options);
    return response;
  }

  async put<T, K>(url: string, data: T, options?: K) {
    const response = await this.axios.put(url, data, options);
    return response;
  }

  async delete(url: string, options: any) {
    const response = await this.axios.delete(url, options);
    return response;
  }
}
