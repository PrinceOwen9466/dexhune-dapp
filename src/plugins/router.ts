import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "src/views/LandingPage.vue"

const routes: Array<RouteRecordRaw> = [
  {
    "path": "/",
    component: Landing
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
