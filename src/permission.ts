// 路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问）
import router from '@/router'
// 引入进度条样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
nprogress.configure({ showSpinner: false })

import setting from './setting'

import pinia from './store'
import useUserStore from './store/modules/user'
let userStore = useUserStore(pinia)

// 全局守卫:项目当中任意路由切换都会触发的钩子
// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  // to:你将要访问那个路由
  // from:你从来个路由而来
  // next:路由的放行函数
  nprogress.start()

  let token = userStore.token
  //   获取用户名字
  let username = userStore.username
  if (token) {
    // 登陆成功访问login，指向首页
    if (to.path == '/login') {
      next({ path: '/home' })
    } else {
      // 登陆成功访问其余六个路由（排除login）
      // 有用户信息
      if (username) {
        // 放行
        next()
      } else {
        // 如果没有用户信息，在守卫发请求获取用户信息再放行
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          // token过期：获取不到用户信息
          // 用户手动修改本地存储token
          // 退出登录=> 用户相关的数据清空
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

// 全局后置守卫
router.afterEach((to: any, from: any, next: any) => {
  document.title = `${setting.title}-${to.meta.title}`
  nprogress.done()
})

// 第一个问题:任意路由切换实现进度条业务 ---nprogress
// 第一个问题：路由鉴权（路由组件访问权限的设置）
// 全部路由组件:登录|404|任意路由|首页]数据大屏]权限管理(三个子路由)]商品管理(四个子路由）

// 用户未登录:可以访问login,其余六个路由不能访问(指向login)
// 用户登录成功:不可以访问login[指向首页],其余的路由可以访问
