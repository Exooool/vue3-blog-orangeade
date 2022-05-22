<template>
  <div id="management">
    <side-bar></side-bar>
    <div class="content">
      <div class="statusBar">
        <div class="nowRouteInfo">{{ route.path.replaceAll("/", "#") }}</div>
        <div class="userInfo"></div>
      </div>
      <div class="routerContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// 导入elmentui的css样式
import "element-plus/dist/index.css";
import { computed } from "vue";
import { useRoute } from "vue-router";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>

<style lang="scss">
// 引入iconfont的图标样式
@import url("//at.alicdn.com/t/font_3417707_ruyvrv4sgp.css");
#management {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  background: #ffffff;
  position: relative;

  .dataBox {
    background: #ffffff;
    box-shadow: 4px 4px 10px rgba(0, 118, 135, 0.05),
      -4px -4px 13px rgba(255, 255, 255, 0.5),
      6px 6px 30px rgba(0, 118, 135, 0.1);
    border-radius: 12px;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0px 20px 20px 32px;

    .statusBar {
      width: 100%;
      padding: 22px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .nowRouteInfo {
      }
      .userInfo {
        height: 48px;
        width: 48px;
        border-radius: 24px;
        background-color: #ff8a68;
        box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.05);
      }
    }

    // 自定义滚动条样式
    // 修改滚动条样式
    &::-webkit-scrollbar {
      // 设置滚动条的宽度
      width: 10px;
    }
    // 滚动区域的样式
    &::-webkit-scrollbar-thumb {
      // 设置滚动条的圆角
      border-radius: 10px;
      // 设置内阴影
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      // 设置滚动条的颜色
      background: #ff8a6880;
      border-radius: 19px;
    }
  }

  .routerContent {
    position: relative;
    flex: 1;
  }
}
</style>
