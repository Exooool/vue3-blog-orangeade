<template>
  <div class="sidebar">
    <div class="header">
      <img src="@/assets/backStage/logo.png" />
      <span>Dashboard</span>
    </div>
    <div
      :class="[
        'sidebarItem',
        route.path == item.router ? 'sidebarItemSelected' : '',
      ]"
      v-for="(item, index) in sidebarList"
      :key="index"
      @click="routerTo(item.router)"
    >
      <i :class="['iconfont', item.icon]"></i>
      <span>{{ item.title }}</span>
      <i class="iconfont icon-Arrow"></i>
    </div>
    <div class="bottom">
      <i class="iconfont icon-Vector"></i>
      <i class="iconfont icon-questionMark-copy"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const sidebarList = [
      {
        title: "主页",
        router: "/backstage/home",
        icon: "icon-Home",
      },
      {
        title: "文章",
        router: "/backstage/article",
        icon: "icon-Tool",
      },
      {
        title: "分析",
        router: "/backstage/analysis",
        icon: "icon-Analysis",
      },
      {
        title: "仪表盘",
        router: "/backstage/monitor",
        icon: "icon-Monitor",
      },
    ];
    function routerTo(routeUrl: string) {
      console.log(route.path);
      router.replace(routeUrl);
    }
    return {
      routerTo,
      sidebarList,
      route,
    };
  },
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.1px;
  -moz-osx-font-smoothing: grayscale;
}
.sidebar {
  position: relative;
  height: 100%;
  width: 230px;
  color: #ff8a68;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 118, 135, 0.05),
    6px 6px 40px rgba(0, 118, 135, 0.1);
  border-radius: 20px 12px 12px 20px;
  // logo加名字的显示
  .header {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 24px;
    left: 36px;
    img {
      height: 60px;
      width: 60px;
      object-fit: cover;
    }
    span {
      font-family: "Roboto";
      font-style: normal;
      margin-top: 16px;
      font-weight: 300;
      font-size: 16px;
      line-height: 40px;
      text-transform: uppercase;
      color: #ff8a68;
    }
  }
  // 底部其他选项
  .bottom {
    width: 100%;
    position: absolute;
    left: 24px;
    bottom: 24px;
    i {
      display: inline-block;
      margin-right: 10px;
      border-radius: 60px;
      padding: 8px;
      background-color: #fff4f1;
    }
  }
  .sidebarItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 16px 24px 16px 16px;
    width: 200px;
    height: 70px;
    margin: 6px 0px;
    transition: all 0.2s ease-in-out;
    background: linear-gradient(
        95.73deg,
        rgba(253, 160, 133, 0.2) 0.9%,
        rgba(253, 160, 133, 0.15) 52.54%,
        rgba(253, 160, 133, 0.05) 99.06%
      ),
      rgba(235, 240, 241, 0.3);
    border-radius: 12px;

    span {
      font-weight: 800;
    }

    i:first-child {
      font-size: 24px;
    }

    i:last-child {
      font-size: 12px;
    }
  }
  .sidebarItem:hover,
  .sidebarItemSelected {
    background: #ff8a68;
    color: white;
    box-shadow: 0px 15px 80px rgba(255, 138, 104, 0.13),
      0px 5.47525px 40.9132px rgba(255, 138, 104, 0.0896976),
      0px 2.65813px 30.1634px rgba(255, 138, 104, 0.0723178),
      0px 1.30307px 21.8208px rgba(255, 138, 104, 0.0576822),
      0px 0.515234px 12.1225px rgba(255, 138, 104, 0.0403024);
  }
}
</style>
