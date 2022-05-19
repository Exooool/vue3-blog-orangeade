<template>
  <div class="authorTag">
    <div class="backward"></div>
    <div class="upward">
      <span>{{ title }}</span>
      <span>{{ number }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    number: Number,
  },
};
</script>

<style lang="scss" scoped>
.authorTag {
  position: relative;
  .backward {
    height: 58px;
    width: 64px;
    background: #ffe6df;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
  .upward {
    height: 58px;
    width: 64px;
    background: rgba(255, 138, 104, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    position: absolute;
    top: 10px;
    left: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    span {
      background: linear-gradient(
        161.16deg,
        #ffffff 9.05%,
        rgba(232, 232, 232, 0.5) 54.58%,
        #ffffff 79.52%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}
</style>
