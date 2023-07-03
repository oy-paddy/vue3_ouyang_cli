// uno.config.ts
import { defineConfig, presetUno, presetAttributify, presetIcons } from 'unocss'
//把默认rem单位改为px单位，在通过postcss-pxtorem进行rem转换
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetRemToPx(),
  ],
})
