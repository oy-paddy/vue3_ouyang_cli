import {
  defineConfig,
  // 属性化模式，属性冲突时，可以通过默认un-前缀来解决：<div m-2 rounded text-teal-400 >代替class</div>
  presetAttributify,
  // 可以自定义图标转换
  presetIcons,
  presetTypography,
  // 预设，必须的
  presetUno,
  // 使用你自己的函数来获取字体来源
  presetWebFonts,
  // 有多少个别名，默认启用
  transformerDirectives,
  /**
   * 组合，方便书写
   * 前缀组合：class="hover:(bg-gray-400 font-medium) font-(light mono)"
   * class="hover:bg-gray-400 hover:font-medium font-light font-mono"
   */
  transformerVariantGroup,
} from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'

// unocss 把自带的 rem 转换为 px
import presetRemToPx from '@unocss/preset-rem-to-px'

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

// 开发的时候检查样式：http://localhost:5173/__unocss

export default defineConfig({
  // 预设的别名，可以进行一些组合使用
  shortcuts: [
    ['center', 'flex items-center justify-center'],
    ['btn', 'px-2 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        'my-icon': FileSystemIconLoader(
          './src/assets/svg',
          svg => svg.replace(/#FFF/, 'currentColor'),
        ),
      },
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  transformers: [
    // 指令：@apply等
    transformerDirectives(),
    transformerCompileClass({
      classPrefix: 'ouyang-',
    }),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
