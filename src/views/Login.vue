<script lang="ts" setup>
import { ref, computed } from 'vue'

const viewTypeEnum = {
  account: 0,
  phone: 1,
  resetPassword: 2
}
const viewTypes = [
  { type: viewTypeEnum.account, title: '账号登录', loginBtnText: '手机号登录' },
  { type: viewTypeEnum.phone, title: '手机号登录', loginBtnText: '账号登录' },
  { type: viewTypeEnum.resetPassword, title: '重置密码', loginBtnText: '重置密码' }
]


let showPassWord = ref(false)
let showViewType = ref(viewTypeEnum.account)

function changeViewType(type: number = 2) {
  showViewType.value = type
}

const viewType = computed(() => viewTypes[showViewType.value])

</script>

<template>
  <view class="relative h-screen text-24 bg-white w-full relative">
    <i i-carbon-close class="text-54 absolute left-24 top-114" @click="changeViewType(viewTypeEnum.account)"></i>

    <!-- 账号登录&手机号登录 -->
    <view class="flex flex-col items-center"
      v-if="viewType.type == viewTypeEnum.account || viewType.type == viewTypeEnum.phone">
      <text class="text-42 font-bold mb-76 mt-200">{{ viewType.title }}</text>
      <input placeholder="请输入邮箱或子账号" type="text" class="text-28 rounded-18 p-x-16 h-88 w-660 bg-[#F8F8F8]">
      <view class="relative center mt-32 mb-24 ">
        <input placeholder="请输入密码" :type="showPassWord ? 'text' : 'password'"
          class="text-28 rounded-18 p-x-16 pr-70 h-88 w-660 bg-[#F8F8F8]">
        <i :class="['absolute right-30 h-28', showPassWord ? 'i-carbon-view-off' : 'i-carbon-view']"
          @click="showPassWord = !showPassWord"></i>
      </view>
      <view class="text-#007AFF flex flex-row justify-between w-660 p-x-0">
        <text
          @click="changeViewType(viewType.type == viewTypeEnum.account ? viewTypeEnum.phone : viewTypeEnum.account)">{{
            viewType.loginBtnText }}</text>
        <text @click="changeViewType(viewTypeEnum.resetPassword)">忘记密码?</text>
      </view>

      <view class="text-28 text-white flex flex-col items-center">
        <view class="mt-80 mb-40 text-32 w-660 h-88 rounded-220 bg-#007AFF hover:bg-#007AFF:80 text-center line-height-88">
          登录
        </view>
        <text class="text-#007AFF">注册</text>
      </view>
    </view>

    <!-- 重置密码 -->
    <view class="flex flex-col items-center" v-if="viewType.type == viewTypeEnum.resetPassword">
      <text class="text-42 font-bold mb-76 mt-200">{{ viewType.title }}</text>
      <input placeholder="请输入手机号或邮箱" type="text" class="text-28 mb-28 rounded-18 p-x-16 h-88 w-660 bg-[#F8F8F8]">
      <view class="relative center mb-28 text-28">
        <input placeholder="请输入验证码" type="number"
          class="rounded-18 pl-16 h-88 w-660 bg-[#F8F8F8] pr-340">
        <view class="flex flex-row items-center absolute right-30">
          <view class="w-1 h-40 bg-#C5C5C5 mr-24"></view>
          <text class="text-#007AFF">重新获取(30s)</text>
        </view>
      </view>
      <input placeholder="请输入密码(≥8位，至少包含数字、大小写字母)" type="text"
        class="text-28 mb-28 rounded-18 p-x-16 h-88 w-660 bg-[#F8F8F8]">
      <input placeholder="请再次输入密码" type="text" class="text-28 rounded-18 p-x-16 h-88 w-660 bg-[#F8F8F8]">
      <view class="text-28 text-white flex flex-col items-center">
        <view @click="changeViewType(viewTypeEnum.account)"
          class="mt-80 mb-40 text-32 w-660 h-88 rounded-220 bg-#007AFF text-center line-height-88">
          {{ viewType.loginBtnText }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
</style>
