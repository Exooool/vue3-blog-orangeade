<template>
  <div class="dataDisplay">
    <div class="leftArea">
      <div class="articleBox dataBox" id="userVisitChart"></div>
      <!-- <div class="dataChart dataBox">
        
      </div> -->
    </div>
    <div class="rightArea">
      <div class="otherInfo dataBox">
        <div id="pieChart"></div>
      </div>
      <div class="otherInfo dataBox">
        <div id="lineChart"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      // 移除_echarts_instance_属性 让echarts重新渲染canvas
      // echarts使用过元素上的该属性判断有无图标渲染 渲染过的不会重新渲染 就会导致切换路由的时候没有显示
      let pie = document.getElementById("pieChart") as HTMLElement;
      pie.removeAttribute("_echarts_instance_");
      let line = document.getElementById("lineChart") as HTMLElement;
      line.removeAttribute("_echarts_instance_");

      let pieChart = echarts.init(
        document.getElementById("pieChart") as HTMLElement
      );
      let lineChart = echarts.init(
        document.getElementById("lineChart") as HTMLElement
      );

      lineChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      });
      // 绘制图表
      pieChart.setOption({
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 484, name: "Union Ads" },
              { value: 300, name: "Video Ads" },
            ],
          },
        ],
      });

      let userVisit = document.getElementById("userVisitChart") as HTMLElement;
      userVisit.removeAttribute("_echarts_instance_");

      let userVisitChart = echarts.init(
        document.getElementById("userVisitChart") as HTMLElement
      );

      // 绘制时间折线图
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date = [];
      let data = [Math.random() * 300];
      for (let i = 1; i < 20000; i++) {
        var now = new Date((base += oneDay));
        date.push(
          [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
        );
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }
      userVisitChart.setOption({
        tooltip: {
          trigger: "axis",
          position: function (pt: Array<number>) {
            return [pt[0], "10%"];
          },
        },
        title: {
          left: "center",
          text: "Large Area Chart",
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: date,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 10,
          },
          {
            start: 0,
            end: 10,
          },
        ],
        series: [
          {
            name: "Fake Data",
            type: "line",
            symbol: "none",
            sampling: "lttb",
            areaStyle: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: "rgb(255, 158, 68)",
              //   },
              //   {
              //     offset: 1,
              //     color: "rgb(255, 70, 131)",
              //   },
              // ]),
            },
            data: data,
          },
        ],
      });
    });
  },
};
</script>

<style lang="scss" scoped>
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
      height: 300px;
      padding: 24px;
      box-sizing: border-box;
      margin-top: 20px;
      display: flex;
      #pieChart {
        height: 100%;
        flex: 1;
        background-color: #fff9f8;
        border-radius: 12px;
      }
      #lineChart {
        height: 100%;
        margin-left: 16px;
        flex: 1;
        background-color: #fff9f8;
        border-radius: 12px;
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
      margin-bottom: 16px;
      #pieChart {
        height: 100%;
        flex: 1;
        background-color: #fff9f8;
        border-radius: 12px;
      }
      #lineChart {
        height: 100%;
        flex: 1;
        background-color: #fff9f8;
        border-radius: 12px;
      }
    }
  }
}
</style>
