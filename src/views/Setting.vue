<script lang="ts" setup>
import { useRoute } from 'vue-router';
const router = useRouter()
function toLogin(){
  router.push('/login');
}
</script>

<template>
  <div class="">
    <van-cell title="设置" is-link  @click="toLogin"/>
  </div>
</template>

<style lang="scss" scoped></style>
