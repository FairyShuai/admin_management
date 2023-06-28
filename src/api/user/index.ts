// 统一管理项目用户相关接口
import request from '@/utils/request'
import { LoginForm, LoginResponseData, UserResponseData } from './type'

// 项目用户相关请求地址
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
// 暴露请求函数
// 登录接口方法
export const reqLogin = (data: LoginForm) =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)

// 获取用户信息接口方法
export const reqUserInfo = () =>
  request.get<any, UserResponseData>(API.USERINFO_URL)

// 退出登录
export const reqLogOut = () => request.post<any, any>(API.LOGOUT_URL)
