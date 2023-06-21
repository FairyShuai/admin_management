import SvgIcon from './svg-icon/index.vue'
import Pagination from './pagination/index.vue'

//  对外暴露插件对象
const allGloableComponent: any = { SvgIcon, Pagination }
export default{
    // 务必叫做install方法
    install(app: any){
        // 注册项目全部的全局组件
        Object.keys(allGloableComponent).forEach((key: string) => {
            // 注册为全局组件
            app.component(key, allGloableComponent[key])
        })
    }
}