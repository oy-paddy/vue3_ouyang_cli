<script lang="ts" setup>
import { myName } from "@/composables/useData";
</script>
<template>
  <div class="center">
    <input class="mt-20 text-center p-2" border="~ gray-200 dark:gray-700 rounded-full" outline="none" type="text" v-model="myName">
  </div>
</template>

<style>

</style>
