import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/auth/Login.vue";
// import Register from "../components/Register.vue";
import Dashboard from "../components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   component: Register,
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }, // Menandai bahwa halaman ini membutuhkan autentikasi
  },
  { path: "*", redirect: "/login" }, // Mengarahkan halaman tidak ditemukan ke halaman login
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
    // Jika pengguna belum login dan mencoba mengakses halaman yang membutuhkan autentikasi,
    // arahkan mereka ke halaman login
    next("/login");
  } else {
    next();
  }
});

export default router;
