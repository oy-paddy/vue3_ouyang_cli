import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      redirect: '/login',
      children: [
        {
          path: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: {
            title: '',
            keepAlive: true,
          },
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta: {
            title: '签到',
            keepAlive: true,
          },
        },
        {
          path: '/list',
          name: 'list',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/ListView.vue'),
          meta: {
            title: '测试',
            keepAlive: true,
          },
        },
        {
          path: '/setting',
          name: 'setting',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@/views/Setting.vue'),
          meta: {
            title: '设置',
            keepAlive: true,
          },
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Login.vue'),
      meta: {
        title: '登录',
      },
    },
    {
      // 找不到路由重定向到404页面
      path: '/:pathMatch(.*)',
      redirect: '/home',
    },

  ]
})

export default router
