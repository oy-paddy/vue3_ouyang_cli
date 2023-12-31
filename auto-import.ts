import AutoImport from 'unplugin-auto-import/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

//自动导入插件
export default [
  AutoImport({
    imports: ['vue', 'vue-router','@vueuse/core'],
    //composables目录文件按需加载
    dirs: ['src/composables/**/*', 'src/stores/**/*'],
    dts: 'src/types/auto-imports.d.ts',
    vueTemplate: true,
    defaultExportByFilename: true,
  }),
  Components({
    resolvers: [
      VueUseComponentsResolver(),
      //针对iconpark图标按需导入
      (componentName) => {
        if (componentName.startsWith('Icon')) {
          return { name: componentName.slice(4), from: '@icon-park/vue-next' }
        }
      },
    ],
    extensions: ['vue', 'tsx'],
    dirs: ['src/components', 'src/layouts'],
    //组件名称包含目录，防止同名组件冲突
    directoryAsNamespace: true,
    //指定类型声明文件，为true时在项目根目录创建
    dts: 'src/types/components.d.ts',
  }),
]
