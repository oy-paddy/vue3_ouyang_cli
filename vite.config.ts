import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 引入jsx进行开发
import vueJsx from '@vitejs/plugin-vue-jsx'

// 自动导入组件与函数
import autoImport from './auto-import'

// 打包分析
import { visualizer } from 'rollup-plugin-visualizer';

// 导入Unocss
import UnoCSS from 'unocss/vite'

// 自动管理浏览器前缀
import autoprefixer from 'autoprefixer'
// css自动转换为rem，切记需要再main.js中 import 'amfe-flexible'
import postCssPxToRem from 'postcss-pxtorem'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ...autoImport,
    visualizer(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 75, // 这里代表的是1rem等于多少rootValue的px。75表示750设计稿，37.5表示375设计稿
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['norem', 'ignore'], // 过滤掉norem-开头的class，不进行rem转换
          mediaQuery: false,  // 允许在媒体查询中转换 px
        }),
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        }),
      ],
    },
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
