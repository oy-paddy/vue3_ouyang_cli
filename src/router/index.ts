import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layout/index.vue'),
      redirect: '/home',
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
            title: '关于',
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
            title: '列表',
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

  ]
})

export default router
