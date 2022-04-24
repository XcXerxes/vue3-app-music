import { createStore } from "vuex"
import global from "./modules/global"
import discover from "./modules/discover"
export default createStore({
  modules: {
    global: {
      namespaced: true,
      ...global
    },
    discover: {
      namespaced: true,
      ...discover
    }
  }
})
