import {
  defineConfig,
  // 属性冲突时，可以通过默认un-前缀来解决 <a text="red"> => <a un-text="red">
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
   * 样式组合，方便书写
   * 组合：class="hover:(bg-gray-400 font-medium) font-(light mono)"
   * class="hover:bg-gray-400 hover:font-medium font-light font-mono"
   */
  transformerVariantGroup,
} from 'unocss'

// unocss 把自带的 rem 转换为 px
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  // 预设的别名，可以进行一些组合使用
  shortcuts: [
    ['center', 'flex items-center justify-center'],
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
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
    presetRemToPx(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose m-auto text-left'.split(' '),
})
