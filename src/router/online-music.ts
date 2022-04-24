import Discover from "@/views/discover/discover-index.vue"
import { RouteRecordRaw } from "vue-router"
const routerList: RouteRecordRaw[] = [
  {
    path: "discover",
    name: "discover",
    component: Discover,
    meta: {
      menu: "discover"
    }
  }
]
export default routerList
