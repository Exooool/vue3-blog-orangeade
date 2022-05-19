<template>
  <div class="home" ref="home">
    <Header></Header>

    <div class="main">
      <!-- <div class="recommendBox"></div> -->

      <div class="twoColumnLayout">
        <div class="leftColumn">
          <article-card
            v-for="(item, index) in data.articleList"
            :key="index"
            :title="item['title']"
            :content="item['content']"
            :img="item['img']"
            :tag="item['tag']"
            :date="'2022/04/22'"
            :author="'xxx'"
          ></article-card>
        </div>
        <div class="rightColumn">
          <div class="authorCard">
            <img src="@/assets/authorlogo.png" alt="作者图片" />

            <span class="name">橘子汽水</span>
            <span class="mark">You can't judge a tree by its bark</span>

            <div class="bottomSheet">
              <author-tag :title="'文章'" :number="10"></author-tag>
              <author-tag :title="'字数'" :number="10"></author-tag>
              <author-tag :title="'标签'" :number="10"></author-tag>
            </div>
          </div>
          <div class="newsComment"></div>
        </div>
      </div>
    </div>

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
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import Header from "@/components/NavComponent.vue";
import ArticleCard from "./components/ArticleCard.vue";
import AuthorTag from "./components/AuthorTag.vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  components: {
    Header,
    ArticleCard,
    AuthorTag,
  },
  setup() {
    const data = reactive({
      articleList: [
        {
          title:
            "浅谈：为啥vue和react都选择了Hook1as对吧11111s是啊实打实大所多撒爱搭搭所多撒多",
          content:
            "2019年年初，react 在 16.8.x 版本正式具备了 hooks 能力。2019年6月，尤雨溪在 vue/github-issues 里提出了关于 vue3 Component API 的提案。（vue hooks的基础）在后续的 react 和 vue3 相关版......2019年年初，react 在 16.8.x 版本正式具备了 hooks 能力。2019年6月，尤雨溪在 vue/github-issues 里提出了关于 vue3 Component API 的提案。在后续的 react 和 vue3 ",
          img: "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1651926582867-ac5aca9ff5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=80",
          tag: "JavaScript",
          author: "xxx",
        },
        {
          title: "浅谈：为啥vue和react都选择了Hook222s",
          content: "",
          img: "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1652616979301-ea3d2b671060?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          tag: "JavaScript",
        },
        {
          title: "浅谈：为啥vue和react都选择了Hook333s",
          content: "",
          img: "https://dogefs.s3.ladydaily.com/~/source/unsplash/photo-1652691292433-a8d61d9e7693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
          tag: "JavaScript",
        },
      ],
    });
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
      data,
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
  position: relative;
  width: 100%;
  background: linear-gradient(
    90deg,
    #f6d365 25.36%,
    rgba(253, 160, 133, 0.95) 71.82%
  );

  // 冰块背景
  #iceBlockGroup {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 0;
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

// 文章显示主要界面
.main {
  position: relative;
  top: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  .recommendBox {
    height: 350px;
    width: 984px;
    margin-bottom: 80px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  .twoColumnLayout {
    width: 984px;
    display: flex;
    justify-content: space-between;
    // 文章显示列
    // .leftColumn {
    //   // 文章卡片
    // }
    // 功能栏列
    .rightColumn {
      // 作者卡片
      .authorCard {
        width: 260px;
        height: 300px;
        box-sizing: border-box;
        padding: 20px 0px 12px 0px;
        left: 743px;
        top: 611px;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        // 作者图片
        img {
          height: 100px;
          width: 100px;
        }
        .name {
          font-weight: 900;
          font-size: 16px;
          line-height: 19px;
        }
        .mark {
          font-weight: 400;
          font-size: 14px;
        }
        // 底部显示各项信息
        .bottomSheet {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
      }

      // 最新评论
      .newsComment {
        width: 260px;
        height: 500px;
        margin-top: 30px;
        background: #ffffff;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
      }
    }
  }
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
