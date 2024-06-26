import axios from 'axios'
import { getToken } from '@renderer/composables/auth.js'
import { showToast } from '@renderer/composables/util.js'

const service = axios.create({
  baseURL: '/api'
  // baseURL:import.meta.env.VITE_APP_BASE_API,
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // 往header头自动添加token
    const token = getToken()
    if (token) {
      config.headers['token'] = token
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response.data.data
  },
  function (error) {
    // 对响应错误做点什么

    showToast(error.response.data.msg || '请求失败', 'error')

    return Promise.reject(error)
  }
)

export default service
