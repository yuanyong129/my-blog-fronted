import axios, { AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'
import { url } from '@/config'

export const http = axios.create({
  baseURL: url,
  timeout: 3000
})

type MyResponseType<T = unknown> = {
  code: number
  message: string
  data: T
}

const request = async<T = unknown> (config: AxiosRequestConfig): Promise<MyResponseType<T>> => {
  try {
    const { data } = await http.request<MyResponseType<T>>(config)
    return data
  } catch (err: any) {
    const message = err.message || '请求失败'
    return { code: -1, message, data: null as any }
  }
}

// 请求拦截器
http.interceptors.request.use(
  (req: InternalAxiosRequestConfig<any>) => {
    // if (req.url) {
    //   if(req.url.indexOf('login') < 0 && req.url.indexOf('register') < 0) {
    //     // req.headers['Authorization'] = `Bearer ${getToken()}`
    //   }
    // }
    return req
  },
  (err: any) => {
    console.log('req err', err)
  }
)
// 响应拦截器
http.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200 || res.status === 201) {
      return res
    } else {
      // Message.error(res.data.message)
      return res
    }
  }   ,
  (err: any) => {
    // const { message } = err.response.data
    // Message.error(message)
    console.log(err)
  }
)

export default request