<template>
  <div class="article">
    <editor
      api-key="mogx13lap35j4rnj5pi9yc3dphjtynshyp0kphvtlbjiuj01"
      :init="{
        selector: 'textarea',
        plugins: [
          'a11ychecker',
          'advlist',
          'advcode',
          'advtable',
          'autolink',
          'checklist',
          'export',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'powerpaste',
          'fullscreen',
          'formatpainter',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount',
        ],
        toolbar:
          'undo redo | casechange blocks | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlst checklist outdent indent | removeformat | a11ycheck code table help',
        language: 'zh-Hans',
        language_url: '/tinymce/langs/zh-Hans.js',
        height: 500,
        resize: false,
        save_onsavecallback: save,
      }"
    />
  </div>
</template>

<script lang="ts">
import Editor from "@tinymce/tinymce-vue";
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    Editor,
  },
  setup() {
    const store = useStore();
    console.log(store);

    function addNum() {
      store.commit("add");
    }

    function save() {
      console.log("Saved");
    }

    // onMounted(() => {});

    return {
      store,
      addNum,
      save,
    };
  },
});
</script>

<style lang="scss" scoped>
.article {
  text-align: center;
}
</style>
