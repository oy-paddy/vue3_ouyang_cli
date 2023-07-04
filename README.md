# 1.自动导入的插件
```
npm i -D unplugin-auto-import
npm i -D unplugin-vue-components 

通过auto-import.ts进行自动导入相关配置
```

# 2.elemnt-plus框架
> npm install element-plus --save

# 3.lodash库
> npm i --save lodash

# 4.vueuse库
> npm i @vueuse/core


# 5.vite.config导入文件报红
> 在tsconfig.node.json文件中把报红的文件添加到include中
```
//tsconfig.node.json文件
 "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "auto-import.ts"],
```

# 6.安装scss
```
npm install -D node-sass sass sass-loader
```

# 7.安装unocss
```
1.安装[链接](https://blog.csdn.net/m0_50864962/article/details/125801848)：npm i -D unocss @unocss/preset-uno @unocss/preset-attributify @unocss/preset-icons
```


# 8.mock实践
```
安装：npm install mockjs

fetch不支持mock，如果要支持的要安装fetch-mock:https://cloud.tencent.com/developer/article/2054471

我直接使用axios，用到的是vueuse下的useAxios。需要安装两个东西：
npm i axios
npm i @vueuse/integrations

```

# 9.unocss使用图标
```
参考：https://blog.csdn.net/sdhshsjh/article/details/128264627

main.ts文件
import "uno.css";

vite.config.ts文件配置
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
 
import unoCss from "unocss/vite";
// 引入 图标预设 和 工具类预设
import { presetIcons, presetUno } from "unocss";
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置 unocss 
    unoCss({
      presets: [presetIcons(), presetUno()],
    }),
  ],
});

presetIcons 需要下载 icon 包，网址 Icônes ，选一个你想用的 icon 包。例如：https://icones.js.org/collection/typcn
npm i -D @iconify-json/typcn
npm i -D @iconify-json/svg-spinners //这个是svg动画库，有意思


unocss最后在使用的时候记得加上前缀 'i-'
比如太阳的图标名为：typcn:adjust-brightness需要改为i-typcn:adjust-brightness
<div class="i-typcn:adjust-brightness">22</div>
```


# 10.可视化插件webpack-bundle-analyzer 实践失败
- npm install webpack-bundle-analyzer -D
```
首先需要下载依赖：

npm install webpack-bundle-analyzer -D

然后配置webpack.config.js 文件：

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

plugins:[

new BundleAnalyzerPlugin(),

]
```

# 11.rollup-plugin-visualizer
```
yarn add rollup-plugin-visualizer --dev

在vite.confg.ts引入插件并使用
import visualizer from 'rollup-plugin-visualizer';

使用
const plugins = [vue(), vueSetupExtend(), vueJsx(), visualizer()]

分析发现@elment/icons超大，因为在main.js全部引入了，所以需要改成按需引入
```

# 12. fiexd如何撑开长度
手动指定宽高，右边的布局margin-left: 左边的布局宽度。高度需要计算calc(100% - 60px)，因为有头部(60px)


# 13.在Tailwind CSS 3/ Vue 3中无法使用动态任意值

# 14.搭建自己脚手架，用degit获取模板
> git不push空的文件夹
- 关联远程仓库，其中github是remote的代名，可以随便取。例子： git remote add github https://github.com/oy-paddy/vue3_ouyang_cli.git
- 首次可以强行推送覆盖：git push -f github main
- degit获取模板：degit https://github.com/oy-paddy/vue3_ouyang_cli.git vue_router_animation

# 15.Vue——组件命名报错 “Component name “XXX“ should always be multi-word”的解决方法
```
在根目录下，打开【.eslintrc.js】文件，如果没有，就新建，内容
  rules: {
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
  },
```


# 16.解决defineProps报错
在.eslintrc.cjs文件中添加
 env: {
        node: true,
        "vue/setup-compiler-macros": true,
    },


# 17.引入unocss重置样式
// 导入样式重置，其中@unocss/reset目录下还有几种，我感觉下面这个好用
import '@unocss/reset/tailwind.css'

# 18.unocss使用组合样式
UnoCSS transformer for @apply, @screen and theme() directives: @unocss/transformer-directives.

```
安装：yarn add -D @unocss/transformer-directives

// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives(),
  ],
})
```

# 19.前端适配
## 19.1.前端适配方案
> 推荐和原子化插件 unocss或者tailwindcss 一起使用
- [postcss-px-to-viewport vw适配方案](https://juejin.cn/post/7228978346503225402)
- [lib-flexible&postcss-pxtorem px-rem适配方案](https://juejin.cn/post/7057350246560940062)

## 19.2.postcss-px-to-viewport插件使用
- 安装：npm install postcss-px-to-viewport --save-dev
```
//在vite.config.ts中
import pxtovw from "postcss-px-to-viewport" 
const loader_pxtovw = pxtovw({
  unitToConvert: 'px', // 要转化的单位
  viewportWidth: 750, // UI设计稿的宽度
  unitPrecision: 6, // 转换后的精度，即小数点位数
  propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  replace: true, // 是否转换后直接更换属性值
  // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
  landscape: false // 是否处理横屏情况
})
```
- 安装scss:npm install node-sass sass-loader sass -D

## 19.3.lib-flexible&postcss-pxtorem
> postcss-px-to-viewport 插件
- 工具一：lib-flexible —— 用于自动设置 rem 基准值(也就是html上的font-size)
- 工具二：postcss-pxtorem —— 是一款 postcss 插件，用于将px单位转化为 rem
- 安装：npm i amfe-flexible -D
- 安装：npm i postcss-pxtorem -D
- 安装（自动管理浏览器前缀）：npm install autoprefixer --save  
- [参考配置](https://unocss.dev/presets/rem-to-px#installation)如果使用了unocss，需要把自带的rem转换为px，在通过postcss-pxtorem转换为rem：npm install -D @unocss/preset-rem-to-px

## 19.4.按需导入
- 安装：npm i unplugin-vue-components -D



# 20.引入vant
- [安装参考](https://vant-ui.github.io/vant/#/zh-CN/tabbar)
- vant适配vw问题：因为设计稿是750，但是vant的设计稿是375，所以导致转换会有问题。[解决方案](https://juejin.cn/post/6961737808339795975)如下： npm i vite-plugin-style-import -D
- px转换为rem
```
//vite.config.js
rootValue({ file }) {
            return file.indexOf('vant') !== -1 ? 37.5 : 75;
          }, 
```

- px转换为vw
```
npm install postcss-px2vp --save-dev

//vite.config.js
px2vp({
          viewportWidth(rule) {
            const file = rule.source?.input.file;
            // 根据文件名动态配置viewport width
            if (file?.includes('vant')) return 375;
            return 750;
          }
})

```
