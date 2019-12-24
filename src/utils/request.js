// 封装一个axios
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'// 引入第三方包
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 设置一个常态值
// 请求拦截
axios.interceptors.request.use(function (config) {
  // 执行请求ok
//   config 请求参数配置
  let token = window.localStorage.getItem('user-token')// 取token
  config.headers.Authorization = `Bearer ${token}`// 统一注入token
  return config// 表示会用该config请求进行后台操作
}, function () {
  // 执行请求错误
})

axios.defaults.transformResponse = [function (data) {
  // data 是响应回来的字符串
  return JSONBig.parse(data)// 解决js处理大数字失真问题
}]

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 成功执行该函数 状态码 200 /201/ 204
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '没有设置这条评论的权限'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:

      window.localStorage.removeItem('user-token') // 清空缓存
      router.push('/login') // this.$router.push()
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  Message({ type: 'warning', message })
  //   希望 在异常处理函数中将所有的错误都处理完毕 不再进入catch  终止错误
  return Promise.reject(error)
})
// 失败时执行该函数

export default axios
