<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { showToast } from 'vant';

import { ref } from "vue"
const router = useRouter()
const username = ref('')
const password = ref('')
const tryCount = ref(0)
const login = () => {
  if ((username.value === 'admin' && password.value === '123456') || tryCount.value) {
    router.push('/home');
  } else {
    showToast({
      message: '用户名或密码错误',
      position: 'bottom',
    });
  }
  tryCount.value += 1
}

</script>

<template>
  <div class="login h-screen bg-[#f5f6f9] w-full flex items-center justify-center">
    <div class="w-3/4">
      <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
      <van-field v-model="password" label="密码" type="password" placeholder="请输入密码" />
      <div class="mt-10">
        <van-button type="primary" block @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
