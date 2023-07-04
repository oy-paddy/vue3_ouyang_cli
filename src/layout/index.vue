<template>
  <template v-if="$route.meta.title">
    <van-nav-bar :title="$route.meta.title" :left-arrow="!tabbarVisible" @click-left="goBack" />
  </template>
  <div class="main-page" :class="{ tabbar: tabbarVisible}">
    <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component" :key="$route.path" />
      </keep-alive>
    </RouterView>
    <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
  </div>
  <van-tabbar inactive-color="#364636" active-color="#1989fa" bottom v-model="activeTab" v-show="tabbarVisible"
    @change="tabSwitch">
    <van-tabbar-item v-for="item in tabItem" :key="item.path" :tab-title="item.path" :icon="item.icon">{{ item.key }}</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup name="BasicLayoutPage">
import { useRouter } from 'vue-router';
import { ref, watch } from "vue"
const tabItem = [
  { key: '首页', icon: 'home-o',path:"/home" },
  { key: '签到', icon: 'search',path:"/about" },
  { key: '测试', icon: 'friends-o',path:"/list"  },
  { key: '设置', icon: 'setting-o',path:"/setting"  },
];
const router = useRouter();
const activeTab = ref(0);
const tabbarVisible = ref(true);
const showBorder = ref(true);
watch(
  () => router,
  () => {
    const judgeRoute = tabItem.some((item) => item.path === router.currentRoute.value.path);
    activeTab.value = tabItem.findIndex((item) => item.path === router.currentRoute.value.path);
    tabbarVisible.value = judgeRoute;
    showBorder.value = judgeRoute;
  },
  { deep: true, immediate: true },
);
const tabSwitch = (index) => {
  switch (index) {
    case 0:
      router.push('/home');
      break;
    case 1:
      router.push('/about');
      break;
    case 2:
      router.push('/list');
      break;
    case 3:
      router.push('/setting');
      break;
  }
  activeTab.value = index;
};
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped lang="scss">
.nut-navbar {
  margin-bottom: 0;
}

.main-page {
  box-sizing: border-box;
  height: calc(100vh - 92px);
  overflow-y: scroll;
  overflow-x: hidden;
  background:rgb(245, 246, 249);
}

.tabbar {
  height: calc(100vh - 92px);
  padding-bottom: 100px;
}

.border {
  // padding-left: 30px;
  // padding-right: 30px;
}
</style>
