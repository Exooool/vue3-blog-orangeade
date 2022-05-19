<template>
  <div class="sidebar">
    <div class="sidebarItem">
      <i>1</i>
      <span>Home</span>
      <i>1</i>
    </div>
    <div class="sidebarItem">
      <i>1</i>
      <span>Tool</span>
      <i>1</i>
    </div>
    <div class="sidebarItem">
      <i>1</i>
      <span>Monitor</span>
      <i>1</i>
    </div>
    <div class="sidebarItem">
      <i>1</i>
      <span>Analysis</span>
      <i>1</i>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
.sidebar {
  height: 100%;
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eaf3f4;
  box-shadow: 4px 4px 10px rgba(0, 118, 135, 0.05),
    6px 6px 40px rgba(0, 118, 135, 0.1);
  border-radius: 20px 12px 12px 20px;
  .sidebarItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 16px 24px 16px 16px;
    width: 200px;
    height: 70px;
    margin: 6px 0px;
    background: linear-gradient(
        95.73deg,
        rgba(0, 118, 135, 0.08) 0.9%,
        rgba(0, 118, 135, 0.06) 52.54%,
        rgba(0, 118, 135, 0.02) 99.06%
      ),
      rgba(235, 240, 241, 0.3);
    border-radius: 12px;

    &:hover {
      background: #007c84;
      color: white;
      box-shadow: 0px 15px 80px rgba(0, 124, 132, 0.13),
        0px 5.47525px 40.9132px rgba(0, 124, 132, 0.0896976),
        0px 2.65813px 30.1634px rgba(0, 124, 132, 0.0723178),
        0px 1.30307px 21.8208px rgba(0, 124, 132, 0.0576822),
        0px 0.515234px 12.1225px rgba(0, 124, 132, 0.0403024);
    }
  }
}
</style>
