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
// rem方案（转换后会有0.1px的像素差）：css自动转换为rem，切记需要再main.js中 import 'amfe-flexible' 自动设置基准值
import postCssPxToRem from 'postcss-pxtorem'

// vw方案（无像素差）：px自动转换vw
import pxtovw from "postcss-px-to-viewport"

// 是否使用vw方案，false:使用rem方案；true:使用vw方案
const useVwModel = false

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
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        }),
        useVwModel ? pxtovw({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度,vant是375。可参考这个：https://juejin.cn/post/6961737808339795975
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          landscape: false, // 是否处理横屏情况
          exclude: [/node_modules\/vant/i]
        }) : postCssPxToRem({
          // 自适应，px>rem转换
          rootValue: 75, // 这里代表的是1rem等于多少rootValue的px。75表示750设计稿，37.5表示375设计稿
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ['norem', 'ignore'], // 过滤掉norem-开头的class，不进行rem转换
          mediaQuery: false,  // 允许在媒体查询中转换 px
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
