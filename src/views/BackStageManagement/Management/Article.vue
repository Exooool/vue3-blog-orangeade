<template>
  <div class="article dataBox" style="border-radius: 5px">
    <div class="toolbar">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-count="data.totalSize"
        @current-change="changePage"
        :current-page="data.currentPage"
      />
      <!-- addButton 添加文章 进入文章编辑页 -->
      <div class="addButton" @click="router.push('/backstage/articleEdit')">
        <i class="iconfont icon-add" style="font-size: 24px"></i>
      </div>
    </div>
    <div class="articleList">
      <el-table :data="data.tableData" height="100%" style="width: 100%">
        <el-table-column>
          <template #header>
            <el-checkbox v-model="checked1" label="全选" size="large" />
          </template>
          <template #default="scope">
            <el-checkbox
              v-model="checked1"
              size="large"
              :vdata="scope.$index"
            />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="200" />
        <el-table-column prop="author" label="作者" />
        <el-table-column prop="catalog" label="分类目录" />
        <el-table-column prop="tag" label="标签" />
        <el-table-column prop="comment" label="评论" />
        <el-table-column prop="datetime" label="日期" width="150" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { ElPagination, ElTable, ElTableColumn, ElCheckbox } from "element-plus";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  components: { ElPagination, ElTable, ElTableColumn, ElCheckbox },
  setup() {
    const router = useRouter();
    let checked1 = ref(false);
    let data = reactive({
      tableData: [
        {
          title: "这是一个新闻标题",
          author: "admin",
          catalog: "JavaScript",
          tag: "学习",
          comment: "",
          date: "2016-05-03",
        },
      ],
      pageSize: 10,
      totalSize: 0,
      currentPage: 1,
    });

    function changePage(currentPage: number) {
      console.log("element-plus 分页组件点击页数：" + currentPage);

      axios
        .post("http://localhost:3000/article/getPageList", {
          pageSize: data.pageSize,
          pageNum: currentPage,
        })
        .then((res) => {
          data.currentPage = currentPage;
          // console.log(res);
          data.tableData = res.data.data;
          data.pageSize = res.data.pageSize;
          data.totalSize = res.data.totalSize;
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // 获取文章列表
    axios
      .post("http://localhost:3000/article/getPageList", {
        pageSize: 10,
        pageNum: 1,
      })
      .then((res) => {
        console.log(res);
        data.tableData = res.data.data;
        data.pageSize = res.data.pageSize;
        data.totalSize = res.data.totalSize;
        console.log(data.tableData);
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      data,
      checked1,
      router,
      changePage,
    };
  },
};
</script>

<style lang="scss">
// 改变elemnt-plus的ui颜色
.el-pagination.is-background .el-pager li:not(.is-disabled).is-active {
  background-color: #ff8a68; //修改后的背景图颜色
  color: #fff;
}
.el-pagination.is-background .el-pager li:not(.is-disabled):hover {
  color: #fcad94;
}
.el-pagination.is-background .btn-next:hover:not([disabled]),
.el-pagination.is-background .btn-prev:hover:not([disabled]) {
  color: #ff8a68;
}
.article {
  height: 600px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  .toolbar {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .addButton {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #ff8a68;
      transition: all 0.2s ease-in-out;
      background: linear-gradient(
          95.73deg,
          rgba(0, 118, 135, 0.2) 0.9%,
          rgba(0, 118, 135, 0.15) 52.54%,
          rgba(0, 118, 135, 0.05) 99.06%
        ),
        rgba(235, 240, 241, 0.3);
      opacity: 0.5;

      border-radius: 8px;
      &:hover {
        opacity: 1;
      }
    }
  }
  .articleList {
    height: calc(100% - 50px);
    position: relative;
  }
}
</style>
