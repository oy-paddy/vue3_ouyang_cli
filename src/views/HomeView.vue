<script setup lang="ts">
</script>

<template>
  <div>
    <h1>首页</h1>
    <h2 class="base-text">scss</h2>
    <div class="flex items-center justify-center w-1/2 h-10 border 
    border-solid border-cool-gray-400">
      欢迎使用unocss
    </div>

    <router-link to="/about">跳转到关于</router-link>
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
