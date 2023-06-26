// 对外暴露配置路由(常量路由)
export const ConstantRoute = [
  {
    // 登录
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    // 登录成功以后展示数据
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout', //命名路由
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: 'home',
          hidden: false,
        },
      },
      {
        path: '/test',
        component: () => import('@/views/home/index.vue'),
        name: 'test',
        meta: {
          title: 'test',
          hidden: false,
        },
      },
    ],
  },
  {
    // 404
    path: '/login',
    component: () => import('@/views/404/index.vue'),
    name: '404', //命名路由
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    // 默认路由
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue'),
    name: 'any', //命名路由
    meta: {
      title: 'any',
      hidden: true,
    },
  },
]
