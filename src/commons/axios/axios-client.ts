import axios, { AxiosError, AxiosInstance } from "axios";

class IAxiosError extends AxiosError {
  isRefreshTried: boolean = false;
}

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // headers: { Authorization: `Bearer ${accessToken}}` },
});

// axiosClient.interceptors.response.use(
//   (response) => response,
//   async (error: IAxiosError) => {
//     console.log(error);
//     // const prevRequest = error.config;
//     if (error?.response?.status === 401 && !error.isRefreshTried) {
//       error.isRefreshTried = true;
//       console.log(error.response.headers);
//     }

//     return axiosClient;
//   }
// );

export default axiosClient;
