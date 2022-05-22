<template>
  <div class="article">
    <div class="dataBox articleTitleInfo">
      <span>文章标题</span>
      <div class="input">
        <input type="text" />
      </div>
    </div>
    <div class="dataBox articleOtherInfo">
      <span>文章其他信息</span>
    </div>
    <div class="dataBox articleEdit">
      <div id="toolbar-container"></div>
      <div id="editor-container"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import "@wangeditor/editor/dist/css/style.css";
import {
  createEditor,
  createToolbar,
  IEditorConfig,
  IDomEditor,
  IToolbarConfig,
} from "@wangeditor/editor";

export default defineComponent({
  setup() {
    const store = useStore();
    const text = ref("");

    onMounted(() => {
      const editorConfig: Partial<IEditorConfig> = {};
      editorConfig.placeholder = "请输入内容";
      editorConfig.onChange = (editor: IDomEditor) => {
        // 当编辑器选区、内容变化时，即触发
        console.log("content", editor.children);
        console.log("html", editor.getHtml());
      };

      // 工具栏配置
      const toolbarConfig: Partial<IToolbarConfig> = {};

      // 创建编辑器
      const editor = createEditor({
        selector: "#editor-container",
        config: editorConfig,
        mode: "default", // 或 'simple' 参考下文
      });
      // 创建工具栏
      const toolbar = createToolbar({
        editor,
        selector: "#toolbar-container",
        config: toolbarConfig,
        mode: "default", // 或 'simple' 参考下文
      });
    });

    return {
      store,
      text,
    };
  },
});
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  // 文章标题
  .articleTitleInfo {
    height: 100px;
    display: flex;
    padding: 24px;
    margin-bottom: 24px;
  }
  // 文章信息
  .articleOtherInfo {
    height: 100px;
    display: flex;
    padding: 24px;
    margin-bottom: 24px;
  }
  // 文章编辑区域
  .articleEdit {
    height: 500px;
    padding-top: 10px;
  }
}
</style>
