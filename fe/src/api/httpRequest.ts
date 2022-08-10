import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from 'utils/constants';

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

  async delete<T>(url: string, options: T) {
    const response = await this.axios.delete(url, options);
    return response;
  }
}
