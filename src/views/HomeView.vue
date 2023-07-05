<script setup lang="ts">
import { publicData } from "@/composables/useData";
</script>

<template>
  <div>
    <h1>首页</h1>
    <h2 class="base-text">scss</h2>
    <div class="flex items-center justify-center w-1/2 h-10 border 
    border-solid border-cool-gray-400">
      欢迎使用tailwindcss
    </div>
    <Hello></Hello>
    <router-link to="/about">跳转到关于</router-link>
    <button class="button" @click="publicData += 1">{{ publicData }} >>>+1</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  h1 {
    color: red;
  }

  .base-text {
    color: blue;
  }
}
</style>
