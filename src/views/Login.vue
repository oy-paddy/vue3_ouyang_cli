<script lang="ts" setup>
import { computed, ref } from 'vue'

const viewTypeEnum = {
  account: 0,
  phone: 1,
  resetPassword: 2,
}
const viewTypes = [
  { type: viewTypeEnum.account, title: '账号登录', loginBtnText: '手机号登录' },
  { type: viewTypeEnum.phone, title: '手机号登录', loginBtnText: '账号登录' },
  { type: viewTypeEnum.resetPassword, title: '重置密码', loginBtnText: '重置密码' },
]

const showPassWord = ref(false)
const showViewType = ref(viewTypeEnum.account)

function changeViewType(type = 2) {
  showViewType.value = type
}

const viewType = computed(() => viewTypes[showViewType.value])
</script>

<template>
  <view class="relative relative h-screen w-full bg-white text-24">
    <i i-carbon-close class="absolute left-24 top-114 text-54" @click="changeViewType(viewTypeEnum.account)" />

    <!-- 账号登录&手机号登录 -->
    <view
      v-if="viewType.type == viewTypeEnum.account || viewType.type == viewTypeEnum.phone"
      class="flex flex-col items-center"
    >
      <text class="mb-76 mt-200 text-42 font-bold">
        {{ viewType.title }}
      </text>
      <input placeholder="请输入邮箱或子账号" type="text" class="h-88 w-660 rounded-18 bg-[#F8F8F8] p-x-16 text-28">
      <view class="relative mb-24 mt-32 center">
        <input
          placeholder="请输入密码" :type="showPassWord ? 'text' : 'password'"
          class="h-88 w-660 rounded-18 bg-[#F8F8F8] p-x-16 pr-70 text-28"
        >
        <i
          class="absolute right-30 h-28" :class="[showPassWord ? 'i-carbon-view-off' : 'i-carbon-view']"
          @click="showPassWord = !showPassWord"
        />
      </view>
      <view class="w-660 flex flex-row justify-between p-x-0 text-#007AFF">
        <text
          @click="changeViewType(viewType.type == viewTypeEnum.account ? viewTypeEnum.phone : viewTypeEnum.account)"
        >
          {{
            viewType.loginBtnText }}
        </text>
        <text @click="changeViewType(viewTypeEnum.resetPassword)">
          忘记密码?
        </text>
      </view>

      <view class="flex flex-col items-center text-28 text-white">
        <view
          class="mb-40 mt-80 h-88 w-660 rounded-220 bg-#007AFF text-center text-32 line-height-88 hover:bg-#007AFF:80"
        >
          登录
        </view>
        <text class="text-#007AFF">
          注册
        </text>
      </view>
    </view>

    <!-- 重置密码 -->
    <view v-if="viewType.type == viewTypeEnum.resetPassword" class="flex flex-col items-center">
      <text class="mb-76 mt-200 text-42 font-bold">
        {{ viewType.title }}
      </text>
      <input placeholder="请输入手机号或邮箱" type="text" class="mb-28 h-88 w-660 rounded-18 bg-[#F8F8F8] p-x-16 text-28">
      <view class="relative mb-28 center text-28">
        <input placeholder="请输入验证码" type="number" class="h-88 w-660 rounded-18 bg-[#F8F8F8] pl-16 pr-340">
        <view class="absolute right-30 flex flex-row items-center">
          <view class="mr-24 h-40 w-1 bg-#C5C5C5" />
          <text class="text-#007AFF">
            重新获取(30s)
          </text>
        </view>
      </view>
      <input
        placeholder="请输入密码(≥8位，至少包含数字、大小写字母)" type="text"
        class="mb-28 h-88 w-660 rounded-18 bg-[#F8F8F8] p-x-16 text-28"
      >
      <input placeholder="请再次输入密码" type="text" class="h-88 w-660 rounded-18 bg-[#F8F8F8] p-x-16 text-28">
      <view class="flex flex-col items-center text-28 text-white">
        <view
          class="mb-40 mt-80 h-88 w-660 rounded-220 bg-#007AFF text-center text-32 line-height-88"
          @click="changeViewType(viewTypeEnum.account)"
        >
          {{ viewType.loginBtnText }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
</style>
