import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homepage",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/demo",
    name: "demo",
    component: () => import("../views/DemoView.vue"),
  },
  {
    path: "/redbook",
    name: "redbook",
    component: () => import("../views/RedBookView.vue"),
  },
  {
    path: "/visual",
    name: "visual",
    component: () => import("../views/VisualView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/indexView.vue"),
  },
  {
    path: "/way",
    name: "way",
    component: () => import("../views/way/indexView.vue"),
  },
  {
    path: "/core",
    name: "core",
    component: () => import("../views/coreFoundation/indexView.vue"),
  },
  {
    path: "/cross",
    name: "cross",
    component: () => import("../views/cross/indexView.vue"),
  },
  {
    path: "/interview",
    name: "interview",
    component: () => import("../views/interview/indexView.vue"),
  },
  {
    path: "/fullstack",
    name: "fullstack",
    component: () => import("../views/fullstack/indexView.vue"),
  },
  {
    path: "/preview/:id",
    name: "preview",
    component: () => import("../views/home/previewView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
