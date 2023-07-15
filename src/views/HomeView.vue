<script setup lang="ts">
</script>

<template>
  <div>
    <div hover="text-green-500 b-green-500 font-bold b-2"
      class="m-x-25 mt-20 h-80 w-700 center b-(1px green solid) text-(2xl green)">这是首页
    </div>

    <div class="flex flex-wrap gap-10 p-25">
      <div active='before:opacity-10' 
        class="relative h-50 center select-none rounded-3xl bg-#1989fa p-x-15 text-2xl text-white before-(absolute left-0 top-0 h-full w-full bg-black opacity-0 content-empty)">伪类按钮</div>
      <div active='bg-#337ecc'
        class="relative h-50 h-60 center select-none rounded-10 bg-#409eff p-x-15 text-2xl text-white">
        element按钮
      </div>
      <van-button type="primary" size="small">主要按钮</van-button>
      <div class="base-btn">其他按钮</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-btn {
  @apply h-50 center rounded bg-blue p-x-10 text-2xl text-white;
}
</style>
