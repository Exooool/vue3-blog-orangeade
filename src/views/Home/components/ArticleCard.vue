<template>
  <div class="articleCard" @click="toArticle()">
    <div class="image">
      <img :src="img" alt="" />
    </div>
    <div class="details">
      <span class="title">{{ title }}</span>
      <p class="content">
        {{ content }}
      </p>
      <div class="otherInfo">
        <span class="avator"></span>
        <span>{{ author }}发布于{{ date }}</span>
        <span># {{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  props: {
    title: String,
    content: String,
    date: String,
    tag: String,
    author: String,
    img: String,
  },
  setup() {
    // router用于路由跳转 route用于获取路由参数
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});
    function toArticle() {
      router.push("/article");
    }
    return {
      data,
      toArticle,
    };
  },
};
</script>

<style lang="scss" scoped>
.articleCard {
  height: 330px;
  width: 700px;
  margin-bottom: 30px;
  display: flex;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  // articlecard hover图片放大效果
  &:hover img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
  }

  .image {
    width: 380px;
    position: relative;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
    }
    &::before {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 1;
      background: linear-gradient(
        89.76deg,
        rgba(255, 255, 255, 0) 57.01%,
        rgba(255, 255, 255, 0.3) 66.65%,
        rgba(255, 255, 255, 0.55) 77.38%,
        rgba(255, 255, 255, 0.65) 85.14%,
        rgba(255, 255, 255, 0.75) 94.23%,
        #ffffff 105.24%
      );
      content: "";
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 320px;
    box-sizing: border-box;
    padding: 20px 20px 20px 10px;
    .title {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
    }
    .content {
      flex: 1;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 9;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;
    }
    .otherInfo {
      display: flex;
      justify-content: space-between;
      .avator {
        height: 20px;
        width: 20px;
        background-color: #c4c4c4;
      }
    }
  }
}
</style>
