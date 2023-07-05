<script setup lang="ts">
import { myName } from '@/composables/useData'
const router = useRouter()
let dark = useDark()
const toggleDark = useToggle(dark)
const toAbout = () => router.push('/about')
</script>

<template>
  <div text="gray-700 dark:gray-200" flex="~ items-center justify-center col">
    <div mt-20 class="center flex-col">
      <div class="w-20 h-20 mb-2 i-my-icon:logo-test"></div>
      <div italic class="font-bold">unocss框架 YYDS</div>
    </div>

    <div class="flex-(~ col items-center) mt-20">
      <input v-model="myName" placeholder="你的名字" type="text" border="~ 1px solid gray-200 dark:gray-700"
        class="w-[250px] mb-5 outline-(none active:none) p-2 rounded text-center bg-transparent">
      <div>
        <button btn w="auto" @click="toAbout()">确定</button>
      </div>
    </div>
    <div center h-20>
      <button @click="toggleDark()">
        <div icon-btn i="carbon-sun dark:carbon-moon" />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
