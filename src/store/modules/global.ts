/**
 * 全局
 */
import { getBanner } from "@/services/api"
import * as types from "../types"
interface IState {
  banners: any[]
}
const state: IState = {
  banners: []
}
const getters = {
  banners: (state: IState) => state.banners
}

const mutations = {
  [types.GET_BANNERS](state: IState, data: any) {
    state.banners = data
  }
}

const actions = {
  async getBanners({ commit }: any) {
    const { banners }: any = await getBanner()
    console.log("banners", banners)
    commit(types.GET_BANNERS, banners)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
