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
