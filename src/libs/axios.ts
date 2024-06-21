import axios, {AxiosInstance, AxiosRequestConfig} from "axios"

const axiosCustom : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
} as AxiosRequestConfig);

export default axiosCustom