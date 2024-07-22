import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios"
import {toast} from "sonner";
import Cookies from "js-cookie";

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

axiosCustom.interceptors.response.use(
    (res) => res,
    async (error: AxiosError) => {
        let errorMessage = "An error occurred";
        if (error.response?.data && typeof error.response.data === "object") {
            errorMessage = (error.response.data as any).message || errorMessage;
        }

        if (error.response?.status === 403) {
            const originalRequest = error.config;
            if (!originalRequest) {
                return Promise.reject(error);
            }

            const token = Cookies.get("token");
            if (token && originalRequest.headers) {
                axiosCustom.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                originalRequest.headers['Authorization'] = `Bearer ${token}`;
            }

            try {
                return await axiosCustom(originalRequest);
            } catch (retryError) {
                if (retryError instanceof Error) {
                    toast.error("Retry failed: " + retryError.message);
                } else {
                    toast.error("Retry failed due to an unknown error");
                }
                return Promise.reject(retryError);
            }
        }

        toast.error(errorMessage);
        return Promise.reject(error);
    }
);

export function setAuthorizationToken(token: string) {
    axiosCustom.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axiosCustom