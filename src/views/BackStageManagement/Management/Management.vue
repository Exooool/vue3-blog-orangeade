<template>
  <div id="management">
    <side-bar></side-bar>
    <div class="content">
      <div class="statusBar">
        <div class="nowRouteInfo">{{ route.path.replaceAll("/", "#") }}</div>
        <div class="basicInfo">
          <span class="time">{{ data.time }}</span>
          <span class="date">{{ data.date }}</span>
          <div class="weather">
            <i class="iconfont icon-humidity">{{ data.humidity }}%</i>
            <i class="iconfont icon-temp">{{ data.temp }}℃</i>
          </div>

          <div class="weatherTool">
            <div id="he-plugin-standard" />
          </div>
          <div class="userInfo"></div>
        </div>
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
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  setup() {
    const route = useRoute();
    const data = reactive({
      date: "",
      time: "",
      humidity: 0,
      temp: 0,
    });
    console.log(window);
    onMounted(() => {
      (window as any).WIDGET = {
        CONFIG: {
          layout: "2",
          width: 300,
          height: 300,
          background: "1",
          dataColor: "FFFFFF",
          key: "b043e41b856b4776b70a5e7f73f01877",
        },
      };
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0";
      document.getElementsByTagName("head")[0].appendChild(script);

      // 获取当前时间
      const date = new Date();
      data.date = date.toLocaleDateString().replaceAll("/", " / ");
      data.time = date.toLocaleTimeString().substring(0, 5);
      // 实时更新时间
      setInterval(() => {
        data.time = new Date().toLocaleTimeString().substring(0, 5);
      }, 1000);

      // console.log(date.toLocaleTimeString());

      // 获取当前天气
      axios
        .get(
          "https://devapi.qweather.com/v7/weather/now?location=101010100&key=5afa8c60b2d44e72b020538cc9bec0fc"
        )
        .then((res) => {
          console.log(res.data);
          data.humidity = res.data.now.humidity;
          data.temp = res.data.now.temp;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      route,
      data,
    };
  },
};
</script>

<style lang="scss">
// 引入iconfont的图标样式
@import url("//at.alicdn.com/t/font_3417707_44qa5ax4z8f.css");
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.1px;
  -moz-osx-font-smoothing: grayscale;
}
#management {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  background: #ffffff;
  position: relative;

  .dataBox {
    background: #ffffff;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
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
      .basicInfo {
        position: relative;
        display: flex;
        align-items: center;
        .time {
          margin-right: 17px;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
        }
        .date {
          margin-right: 40px;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: rgba(0, 0, 0, 0.6);
        }
        .weather {
          margin-right: 28px;
          &:hover + .weatherTool {
            opacity: 1;
            z-index: 1000;
          }
        }
        .weatherTool {
          opacity: 0;
          position: absolute;
          transition: all 0.5s ease-in-out;
          top: 50px;
          z-index: 0;
          &:hover {
            z-index: 1000;
            opacity: 1;
          }
        }
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
      width: 8px;
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
