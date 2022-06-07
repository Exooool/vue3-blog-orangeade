<template>
  <div class="article">
    <!-- 主要填写文章标题 -->
    <div class="dataBox articleTitleInfo">
      <span class="title">文章标题</span>
      <div class="inputBox">
        <input type="text" v-model="data.title" />
        <button class="usefulButton" @click="postArticle">发布文章</button>
      </div>
      <div class="linkAddress">固定链接： 192.1.68.1.1/article/1</div>
    </div>
    <div class="articleDetailInfo">
      <!-- 文章发布选项框 -->
      <div class="left dataBox">
        <span class="title">发布</span>
        <div class="postOptions">
          <div class="postDetails">
            <span class="status">状态：草稿</span>
            <span class="public">公开度：公开</span>
            <span class="postDate">发布于：立即发布（2022/05/26）</span>
          </div>
          <div class="postButtons">
            <button class="usefulButton">保存草稿</button>
            <button class="usefulButton">预览</button>
          </div>
        </div>
      </div>
      <!-- 分类和标签的选项 -->
      <div class="right dataBox">
        <div class="catalog">
          <div class="titleRow">
            <span class="title">分类目录</span>
            <i class="iconfont icon-add"></i>
          </div>
          <div class="catalogSelector selector">
            <div
              :class="[
                'selectorItem',
                data.catalogSelect == index ? 'selected' : '',
              ]"
              v-for="(item, index) in data.catalogList"
              :key="index"
              @click="data.catalogSelect = index"
            >
              {{ item["catalog_name"] }}
            </div>
          </div>
        </div>
        <div class="tag">
          <div class="titleRow">
            <span class="title">标签目录</span>
            <i class="iconfont icon-add"></i>
          </div>
          <div class="tagSelector selector">
            <div
              :class="[
                'selectorItem',
                data.tagSelect == index ? 'selected' : '',
              ]"
              v-for="(item, index) in data.tagList"
              :key="index"
              @click="data.tagSelect = index"
            >
              {{ item["tag_name"] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dataBox articleEdit">
      <div id="toolbar-container"></div>
      <div id="editor-container"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import "@wangeditor/editor/dist/css/style.css";
import {
  createEditor,
  createToolbar,
  IEditorConfig,
  IDomEditor,
  IToolbarConfig,
} from "@wangeditor/editor";
import axios from "axios";

export default defineComponent({
  setup() {
    const store = useStore();
    const text = ref("");
    const data = reactive({
      title: "",
      catalogSelect: -1,
      tagSelect: -1,
      catalogList: [],
      tagList: [],
      editorContent: "",
      coverImgUrl: "",
    });

    onMounted(() => {
      const editorConfig: Partial<IEditorConfig> = {};
      editorConfig.placeholder = "请输入内容";
      editorConfig.onChange = (editor: IDomEditor) => {
        // 当编辑器选区、内容变化时，即触发
        // console.log("content", editor.children);
        console.log("html", editor.getHtml());
        data.editorContent = editor.getHtml();
        // console.log("text", editor.getText());
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

      // 获取分类列表以及标签列表
      axios.get("http://localhost:3000/article/getTagList").then((res) => {
        console.log(res);
        data.tagList = res.data.data;
      });
      axios.get("http://localhost:3000/article/getCatalogList").then((res) => {
        console.log(res);
        data.catalogList = res.data.data;
      });
    });

    // 发布文章
    function postArticle() {
      let articleData = {
        title: data.title,
        author: "admin",
        tag: data.tagList[data.tagSelect]["tag_name"],
        catalog: data.catalogList[data.catalogSelect]["catalog_name"],
        content: data.editorContent,
      };

      axios
        .post("http://localhost:3000/article/pushArticle", articleData)
        .then((res) => {
          console.log(res);
        });
      console.log(articleData);

      return;
    }

    return {
      store,
      text,
      data,
      postArticle,
    };
  },
});
</script>

<style lang="scss" scoped>
// 标题统一样式
.title {
  font-weight: 700;
  color: #ff8a68;
}
// 常用button样式
.usefulButton {
  height: 32px;
  width: 100px;
  line-height: 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #ff8a68;
  background-color: #ffffff;
  border: 0.5px solid rgba(255, 138, 104, 0.5);
  border-radius: 6.83799px;
  box-shadow: 0px 4px 10px rgba(102, 102, 102, 0.1);
  transition: all 0.1s ease-in-out;
  &:active,
  &:hover {
    color: #ffffff;
    background-color: #ff8a68;
  }

  &:active {
    box-shadow: none;
  }
}

.article {
  width: 100%;
  // 文章标题
  .articleTitleInfo {
    height: 130px;
    width: 600px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 24px;
    // 输入框box
    .inputBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // 输入框
      input {
        height: 35px;
        margin-right: 20px;
        padding: 0px 20px;
        font-size: 16px;
        flex: 1;
        background: #ffffff;
        border: 0.5px solid rgba(255, 138, 104, 0.5);
        box-shadow: inset 0px 4px 4px rgba(241, 128, 64, 0.1);
        border-radius: 10px;
        outline: none;
        &:hover,
        &:focus {
          border: 0.5px solid rgba(255, 138, 104, 1);
        }
      }
    }
  }
  // 文章信息
  .articleDetailInfo {
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    // 左栏
    .left {
      height: 220px;
      width: 375px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      box-sizing: border-box;
      padding: 20px;
      .postOptions {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .postDetails {
          display: flex;
          flex-direction: column;
          span {
            font-weight: 300;
            font-size: 16px;
            color: #ff8a68;
            margin-bottom: 10px;
          }
        }
        .postButtons {
          flex: 1;
          button {
            margin-top: 10px;
          }
        }
      }
    }
    // 右栏
    .right {
      height: 220px;
      box-sizing: border-box;
      padding: 20px;
      display: flex;
      flex: 1;
      .catalog {
        margin-right: 10px;
      }
      // 标题行
      .titleRow {
        display: flex;
        padding: 10px;
        justify-content: space-between;
      }
      .selector {
        height: 150px;
        width: 235px;
        padding: 20px;
        box-sizing: border-box;
        overflow-x: hidden;
        background-color: #fff9f8;
        border-radius: 10px;
        .selectorItem {
          height: 32px;
          line-height: 32px;
          text-align: center;
          margin-bottom: 10px;
          color: #ff8a68;
          border: 0.5px solid rgba(255, 138, 104, 0.5);
          border-radius: 6.83799px;
          cursor: pointer;
        }
        .selected {
          color: white;
          background-color: #ff8a68;
        }

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
          background: #ff8a6880;
        }
      }
    }
  }
  // 文章编辑区域
  .articleEdit {
    height: 500px;
    padding-top: 10px;
  }
}
</style>
