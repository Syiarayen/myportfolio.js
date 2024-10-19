import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import ContactPage from "../views/ContactPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import PortfolioPage from "@/views/PortfolioPage.vue";
import CreativePage from "@/views/CreativePage.vue";

const routes = [
  { path: "/", name: "Login", component: LoginPage },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../views/HomePage.vue"),
      },
      {
        path: "users",
        name: "Users",
        component: () => import("../views/UserManagementPage.vue"),
      },
      { path: "/contact", name: "Contact", component: ContactPage },
      { path: "/profile", name: "Profile", component: ProfilePage },
      { path: "/portfolio", name: "Portfolio", component: PortfolioPage },
      { path: "/creative", name: "Creative", component: CreativePage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
