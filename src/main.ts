import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
// 配置element-plus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入模版的全局样式
import '@/styles/index.scss'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象： 注册整个项目全局组件
import GlobalComponent from '@/components'
import router from './router'
// 引入仓库
import pinia from './store'

// 获取应用实例对象
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //国际化
})
// 安装自定义插件
app.use(GlobalComponent)
// 注册模板路由
app.use(router)
// 安装仓库
app.use(pinia)
// 将应用挂在到挂载点上
app.mount('#app')
