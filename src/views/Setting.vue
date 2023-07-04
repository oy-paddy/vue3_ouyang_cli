<script lang="ts" setup>
import { useRoute } from 'vue-router';
const router = useRouter()
function toLogin(){
  router.push('/login');
}
</script>

<template>
  <div class="">
    <button @click="toLogin">去登录</button>
  </div>
</template>

<style lang="scss" scoped></style>
