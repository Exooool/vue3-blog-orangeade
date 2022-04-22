<template>
  <nav>
    <div class="logo">
      <img src="@/assets/orangeade.png" />
    </div>
    <ul>
      <li><span>主页</span></li>
      <li><span>博客</span></li>
      <li><span>作品</span></li>
      <li><span>关于</span></li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// 导航栏
nav {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 1000;

  // 解决高度塌陷
  &::after {
    content: "";
    clear: both;
    display: block;
  }

  .logo {
    float: left;
    color: #2c3e50;
    img {
      height: 80px;
      object-fit: cover;
    }
  }

  ul {
    float: right;
    transform: translateY(50%);
    margin: 0;
    // display: inline-block;
    li {
      display: inline-block;
      // position: absolute;
      padding: 10px 20px;
      &:hover {
        span {
          transform: translateY(-10px);
          color: #fbfcdb;
        }
      }
      span {
        font-size: 18px;
        color: #2c3e50;
        display: inline-block;
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>
