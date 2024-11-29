import axios from 'axios'
// import router from '../routes/index'
// 创建axios实例
const requests = axios.create({
    baseURL: 'http://localhost:3001',// 本地地址
    timeout: 80000, // 请求超时时间(毫秒)
    withCredentials: false,// 异步请求携带cookie
})

// requests请求拦截器
requests.interceptors.request.use(
      config => {
        return config
      },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)
// response 响应拦截器
requests.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default requests
