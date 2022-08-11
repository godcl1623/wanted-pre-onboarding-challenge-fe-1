import axios from 'axios';
import { BASE_URL } from 'utils/constants';

export const communicateServerBy = (baseURL = BASE_URL) => {
  const axiosInstance = axios.create({ baseURL });

  const getData = async <T>(url: string, options?: T) => {
    const response = await axiosInstance.get(url, options);
    return response;
  };

  const postData = async <T, K>(url: string, data: T, options?: K) => {
    const response = await axiosInstance.post(url, data, options);
    return response;
  };

  const putData = async <T, K>(url: string, data: T, options?: K) => {
    const response = await axiosInstance.put(url, data, options);
    return response;
  };

  const deleteData = async <T>(url: string, options: T) => {
    const response = await axiosInstance.delete(url, options);
    return response;
  };

  return { getData, postData, putData, deleteData };
};

export default communicateServerBy;
