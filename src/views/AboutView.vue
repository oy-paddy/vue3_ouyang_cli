<script lang="ts" setup>
import { publicData } from "@/composables/useData";
</script>
<template>
  <div class="about flex-col flex">
    <ResponsiveBox></ResponsiveBox>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </div>
</template>

<style>
</style>
