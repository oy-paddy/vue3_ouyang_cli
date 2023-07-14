<script lang="ts" setup>
import { myName } from "@/composables/useData";
</script>
<template>
  <div class="center">
    <input class="mt-20 p-2 text-center" border="~ gray-200 dark:gray-700 rounded-full" outline="none" type="text"
      v-model="myName">
    <ul></ul>
    <div class="m-2 h-20 w-20 b-(1 red solid) bg-white p-2">222</div>

  </div>
</template>

<style>
</style>
