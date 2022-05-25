<template>
  <div class="loginPage">
    <div class="background">
      <img src="@/assets/backStage/loginBackGround.jpg" />
    </div>

    <div class="loginBox">
      <div class="loginWrapper">
        <span>欢迎回来</span>
        <h1>请登录你的账号</h1>
        <form onsubmit="return false">
          <span>邮箱</span>
          <input type="text" name="email" id="email" v-model="data.email" />
          <span>密码</span>
          <input
            type="password"
            name="password"
            id="password"
            v-model="data.password"
          />
          <button @click="loginAndVerify()">立即登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    const data = reactive({
      email: "",
      password: "",
    });
    function loginAndVerify() {
      console.log(data);
    }
    return {
      data,
      loginAndVerify,
    };
  },
};
</script>

<style lang="scss" scoped>
.loginPage {
  // 背景
  .background {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  // 登录界面
  .loginBox {
    height: 100vh;
    width: 600px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: white;

    form {
      display: flex;
      flex-direction: column;
      span {
        margin-bottom: 11px;
      }
      input {
        height: 50px;
        width: 350px;
        margin-bottom: 11px;
        box-sizing: border-box;
        padding: 10px 20px;
        outline: none;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
        &:hover,
        &:focus {
          border: 1px solid #666666;
        }
      }
      button {
        height: 50px;
        width: 350px;
        margin-top: 20px;
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        background-color: #ff8a68;
      }
    }
  }
}
</style>
