<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
// 清除浏览器自带的内外边距
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;

  // 自定义滚动条样式
  // 修改滚动条样式
  &::-webkit-scrollbar {
    // 设置滚动条的宽度
    width: 6px;
  }
  // 滚动区域的样式
  &::-webkit-scrollbar-thumb {
    // 设置滚动条的圆角
    border-radius: 10px;
    // 设置内阴影
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // 设置滚动条的颜色
    background: linear-gradient(159.2deg, #fa709a 13.76%, #fda085 84.73%);
  }
  // 滚动条的背景样式
  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2); */
    border-radius: 0;
    background-color: rgba(253, 160, 133, 0.5);
  }
}

#app {
  height: 100%;
  font-family: "Roboto";
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
