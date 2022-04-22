<template>
  <div class="article">
    <h1>{{ store.state.number }}</h1>
    <button @click="addNum">addd</button>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    console.log(store);

    function addNum() {
      store.commit("add");
    }

    // onMounted(() => {});

    return {
      store,
      addNum,
    };
  },
});
</script>

<style lang="scss" scoped>
.article {
  text-align: center;
}
</style>
