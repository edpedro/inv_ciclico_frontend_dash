import axios, { AxiosInstance } from "axios";

const useApi = () => {
  const api: AxiosInstance = axios.create({
    baseURL: "https://invciclico.adaptable.app/",
    //baseURL: "http://localhost:3000/",
  });

  return api;
};

export default useApi;
