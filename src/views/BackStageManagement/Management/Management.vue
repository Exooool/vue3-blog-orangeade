<template>
  <div id="management">
    <side-bar></side-bar>
    <div class="content">
      <div class="statusBar"></div>
      <div class="dataDisplay">
        <div class="leftArea">
          <div class="articleBox dataBox"></div>
          <div class="dataChart dataBox">
            <div id="pieChart"></div>
            <div id="lineChart"></div>
          </div>
        </div>
        <div class="rightArea">
          <div class="otherInfo dataBox"></div>
          <div class="otherInfo dataBox"></div>
          <div class="otherInfo dataBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import SideBar from "./components/SideBar.vue";
import { onMounted } from "vue";
export default {
  components: {
    SideBar,
  },
  setup() {
    onMounted(() => {
      let pieChart = echarts.init(
        document.getElementById("pieChart") as HTMLElement
      );
      // 绘制图表
      pieChart.setOption({
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: false, readOnly: false },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      });
    });
  },
};
</script>

<style lang="scss" scoped>
#management {
  height: 100%;
  width: 100%;
  display: flex;
  background: #f5fafa;
  position: relative;

  .dataBox {
    background: #eaf3f4;
    box-shadow: 4px 4px 10px rgba(0, 118, 135, 0.05),
      -4px -4px 13px rgba(255, 255, 255, 0.5),
      6px 6px 30px rgba(0, 118, 135, 0.1);
    border-radius: 12px;
  }

  .content {
    padding: 0px 20px 0px 32px;
    flex: 1;
    .statusBar {
      height: 60px;
      width: 100%;
    }
    // 数据展示
    .dataDisplay {
      display: flex;
      // 左边栏
      .leftArea {
        width: 600px;
        position: relative;

        // 文章数据展示
        .articleBox {
          height: 400px;
        }
        // 数据图标
        .dataChart {
          width: 100%;
          height: 200px;
          margin-top: 20px;
          #pieChart {
            height: 100%;
            width: 50%;
          }
        }
      }
      // 右边栏
      .rightArea {
        flex: 1;
        height: 200px;
        margin-left: 20px;
        // 其他信息
        .otherInfo {
          height: 200px;
        }
      }
    }
  }
}
</style>
