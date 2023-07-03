<script lang="ts" setup>
import { publicData } from "@/composables/useData";
</script>
<template>
  <div class="about flex-col flex">
    <span class="text-base">This is an about page</span>
    <span class="base-t">dkaskdahkhak skdjal</span>
    <span class="base-t2">oooo大家开始打卡dksjaj21</span>
    <div>publicData={{ publicData }}</div>

  </div>
</template>

<style>
.base-t{
  font-size: 37.5px;
}
.base-t2{
  font-size: 16px;
}
</style>
