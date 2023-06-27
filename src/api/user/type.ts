// 登录接口需要携带参数ts类型
export interface LoginForm {
  username: string
  password: string
}

interface DataType {
  token?: string
  message?: string
}

// 登陆接口返回数据类型
export interface LoginResponseData {
  code: number
  data: DataType
}

interface User {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}

// 定义服务器返回用户信息相关数据类型
export interface UserResponseData {
  code: number
  data: User
  message?: string
}
