import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/Home/Home.vue";
import Management from "../views/BackStageManagement/Management/Management.vue";
import BackStageHome from "../views/BackStageManagement/Management/HomeView.vue";
import Article from "../views/BackStageManagement/Management/Article.vue";
import ArticleEdit from "../views/BackStageManagement/Management/ArticleEdit.vue";
import ArticlePage from "../views/Home/Article/Article.vue";
import Login from "../views/BackStageManagement/Login/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/article",
    name: "article",
    component: ArticlePage,
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

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  console.log("从" + from.path + "到" + to.path);
  next();
});

router.afterEach((to, from) => {
  // to and from are both route objects.
  console.log(to, from);
});
export default router;
