import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Root from "@/views/root-view.vue"
import onlineMusicRoutes from "./online-music"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Root,
    children: [...onlineMusicRoutes]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
