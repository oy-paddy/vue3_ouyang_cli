import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 自动导入组件与函数
import autoImport from './auto-import'

// 引入Unocss
import Unocss from 'unocss/vite';

// 打包分析
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/app',
  plugins: [
    vue(),
    vueJsx(),
    ...autoImport,
    Unocss(),
    visualizer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 跨域代理
      '/apis': {
        target: 'https://api.bilibili.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, ''),
        headers: {
          referer: 'https://api.bilibili.com'
        }
      },
      '/test': {
        target: 'https://httpbin.org/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, ''),
      }
    }
  }
})
