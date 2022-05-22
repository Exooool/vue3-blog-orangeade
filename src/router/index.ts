import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home/Home.vue";
import Management from "../views/BackStageManagement/Management/Management.vue";
import BackStageHome from "../views/BackStageManagement/Management/HomeView.vue";
import Article from "../views/BackStageManagement/Management/Article.vue";
import ArticleEdit from "../views/BackStageManagement/Management/ArticleEdit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/backstage",
    name: "BackManagement",
    component: Management,
    children: [
      {
        path: "home",
        component: BackStageHome,
      },
      {
        path: "article",
        component: Article,
      },
      {
        path: "articleEdit",
        component: ArticleEdit,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
