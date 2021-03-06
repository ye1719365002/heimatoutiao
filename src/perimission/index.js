// 专门处理拦截器 导航守卫
import router from '../router'

// 全局前置守卫 当路由发生变化时 这个方法里的回调函数就会执行
router.beforeEach(function (to, from, next) {
  // 权限连接 认为有token 让过去 没token不让过
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next() // 放过
    } else {
      next('/login')// 跳转到登录页
    }
  } else {
    next()// 直接放过
  }
})
