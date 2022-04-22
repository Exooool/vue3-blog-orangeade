<template>
  <div class="home" ref="home">
    <Header></Header>

    <!-- <div class="main">
      <div class="bubbleBall">
        <div class="bubble"></div>
        <div class="shadow"></div>
      </div>
    </div> -->
    <div id="iceBlockGroup">
      <div class="backCover"></div>
      <div class="iceBlock"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import Header from "@/components/NavComponent.vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  components: {
    Header,
  },
  setup() {
    // 由于setup去除了this 无法通过this.$refs来获取元素
    const home = ref(null);
    // 通过使用useStore方法引入store
    const store = useStore();
    // console.log(store.state.name);
    function createIceBlock() {
      let WWidth = window.screen.width;
      let WHeight = (home.value as unknown as HTMLElement).offsetHeight;
      // 初始化left与top的值 给与一个随机值
      // 以及以该随机值乘以角度180deg
      // 并给与其高度与宽度相等且100~400的大小范围
      let left = Math.random() * WWidth;
      let top = Math.random() * WHeight;
      let length = Math.random() * 500;
      let block = document.createElement("div");
      let transform = Math.random() * 180;
      block.className = "iceBlock";
      block.style.top = top + "px";
      block.style.left = left + "px";
      block.style.height = length + "px";
      block.style.width = length + "px";
      block.style.transform = "rotate(" + transform + "deg)";
      document.body.querySelector("#iceBlockGroup")?.appendChild(block);
      // console.log(block);
    }

    onMounted(() => {
      let num = (home.value as unknown as HTMLElement).offsetHeight / 500;
      // console.log(Math.round(num));
      for (let i = 0; i < num; i++) {
        createIceBlock();
      }
    });
    return {
      home,
      store,
    };
  },
});
</script>

<style lang="scss">
@import url("@/style/home.scss");
.home {
  height: 3000px;
  width: 100%;
  background: linear-gradient(
    90deg,
    #f6d365 25.36%,
    rgba(253, 160, 133, 0.95) 71.82%
  );

  #iceBlockGroup {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: relative;
    overflow: hidden;
    .iceBlock {
      height: 200px;
      width: 200px;
      background-color: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
      transform: rotate(74.6deg);
      position: absolute;
      top: 100px;
      left: 20px;
      z-index: 1;
    }
    .backCover {
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 2;
      // background: linear-gradient(to bottom right, #fa709a 1%, #fee140);
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
    }
  }
}

.main {
  display: flex;
  height: calc(100vh - 100px);
  justify-content: center;
  align-items: center;
}

// 泡泡球
.bubbleBall {
  height: 200px;
  width: 200px;
  position: relative;
  .bubble {
    height: 100%;
    width: 100%;
    background: radial-gradient(
      circle at 75% 30%,
      #fff 5px,
      #ff21c0 8%,
      #5b5b5b 60%,
      #ff21c0 100%
    );
    border-radius: 50%;
    box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
      inset 80px 0 60px #efcde6, inset -20px -60px 100px #f9f6de,
      inset 0 50px 140px #f9f6de, 0 0 90px #fff;
    animation: bubble 4s ease-in-out infinite;
  }

  .shadow {
    background-color: rgba(0, 0, 0, 0.15);
    width: 150px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: -100px;
    margin-left: -75px;
    filter: blur(1px);
    animation: shadow 4s ease-in-out infinite;
  }
}

// 自定义动画
@keyframes bubble {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-80px);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
}
</style>
