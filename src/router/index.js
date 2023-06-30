// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/TheHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("@/views/TheShop.vue"),
    meta: {
      layout: "main",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/TheLogin.vue"),
    meta: {
      layout: "login",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
