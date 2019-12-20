import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'

export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册左侧全局组件
    Vue.component('layoutheader', layoutHeader)// 注册头部全局组件
  }
}
