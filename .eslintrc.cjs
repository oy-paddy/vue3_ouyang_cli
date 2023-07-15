/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    "@unocss",//添加unocss eslint规则
    "@antfu",
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
  },
}
