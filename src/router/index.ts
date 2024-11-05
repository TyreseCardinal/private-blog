import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login", // Set the root path to point to the Login page
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "*",
    redirect: "/login", // Redirect unknown routes to login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // Check if the user is authenticated by looking for a token
  const isAuthenticated = !!localStorage.getItem("accessToken"); // Replace with appropriate logic

  if (to.path !== "/login" && !isAuthenticated) {
    next("/login"); // Redirect to login page if not authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router;
