import axios, { AxiosRequestConfig } from "axios"
import { BASE_URL } from "./config"

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.baseURL = BASE_URL
  config.timeout = 20 * 1000
  config.params = {
    ...config.params,
    t: Date.now()
  }
  return config
})

axios.interceptors.response.use(
  (response) => {
    // console.log("response", response)
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
interface HttpApi {
  get<T>(url: string, params?: any): Promise<T>
  post<T>(url: string, params?: any): Promise<T>
}
const httpApi: HttpApi = {
  get(url, params) {
    return axios.get(url, { params })
  },
  post(url, params) {
    return axios.post(url, JSON.stringify(params))
  }
}
export default httpApi
