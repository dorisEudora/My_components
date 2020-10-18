import axios from 'axios'
import { Toast } from 'vant'
const baseURL = process.env.VUE_APP_API_URL

const service = axios.create({
  baseURL: baseURL,
  timeout: 26000
})

function retry(config) {
  if (config.headers.noRetry) {
    return false
  }
  if (config.headers.retryCount <= 3) {
    return service(config)
  } else {
    return false
  }
}

function errorHandler(count, msg) {
  if (count > 3) {
    Toast.clear()
    Toast.fail(msg)
  }
}

service.interceptors.request.use(
  config => {
    Toast.loading({
      duration: 0,
      message: '正在加载',
      forbidClick: true
    })
    config.cancelToken = new axios.CancelToken(cancel => {
      // 挂载在window对象上
      window._axiosPromiseArr = window._axiosPromiseArr || []
      window._axiosPromiseArr.push(cancel)
    })
    if (typeof config.headers.retryCount === 'number') {
      config.headers.retryCount++
    } else {
      config.headers.retryCount = 0
    }
    return config
  },
  err => {
    errorHandler(err.config.headers.retryCount, err.message)
    return retry(err.config)
  }
)

service.interceptors.response.use(
  response => {
    Toast.clear()
    const data = response.data
    if (data.isSuccess) {
      return response.data
    }
    Toast.fail({
      icon: 'close',
      message: data.msg
    })
    return false
  },
  err => {
    if (axios.isCancel(err)) {
      return false
    }
    if (err.message.includes('timeout')) {
      err.message = '请求超时'
    }
    errorHandler(err.config.headers.retryCount, err.message)
    return retry(err.config)
  }
)

export default service
