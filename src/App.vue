<script setup lang="ts">
const active = ref(0);
</script>

<template>
  <div class="flex flex-col">
    <div class="pb-[100px]">
      <RouterView />
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o"><router-link to="/">首页</router-link></van-tabbar-item>
      <van-tabbar-item icon="search"><router-link to="/about">关于</router-link></van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>
</style>
