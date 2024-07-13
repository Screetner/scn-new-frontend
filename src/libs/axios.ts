import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios"
import {toast} from "sonner";

const axiosCustom : AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
} as AxiosRequestConfig);

axiosCustom.interceptors.response.use(
    (res) => res,
    (error : AxiosError) => {
        let errorMessage = "An error occurred";
        if (error.response && error.response.data && typeof error.response.data === "object") {
            errorMessage = (error.response.data as any).message || errorMessage;
        }
        toast.error(errorMessage);

        return Promise.reject(error);
    }
)

export default axiosCustom