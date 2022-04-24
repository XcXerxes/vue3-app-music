/**
 * 在线音乐-推荐
 */
import {
  getPersonalizedList,
  getPersonalizedMv,
  getPersonalizedNewList
} from "@/services/api"
import * as types from "../types"
interface IState {
  personalizedList: any[]
  personalizedNewSongs: any[]
  mvList: any[]
}
const state: IState = {
  personalizedList: [],
  personalizedNewSongs: [],
  mvList: []
}
const getters = {
  personalizedList: (state: IState) => state.personalizedList,
  personalizedNewSongs: (state: IState) => state.personalizedNewSongs,
  mvList: (state: IState) => state.mvList
}

const mutations = {
  [types.GET_PersonalizedList](state: IState, data: any) {
    state.personalizedList = data.slice(0, 10)
  },
  [types.GET_PersonalizedNewSongs](state: IState, data: any) {
    state.personalizedNewSongs = data
  },
  [types.GET_PersonalizedMv](state: IState, data: any) {
    state.mvList = data
  }
}

const actions = {
  async getPersonalizedList({ commit }: any) {
    const { result }: any = await getPersonalizedList()
    console.log("result", result)
    commit(types.GET_PersonalizedList, result)
  },
  async getPersonalizedNewSongs({ commit }: any) {
    const { result }: any = await getPersonalizedNewList()
    console.log("result", result)
    commit(types.GET_PersonalizedNewSongs, result)
  },
  async getPersonalizedMv({ commit }: any) {
    const { result }: any = await getPersonalizedMv()
    console.log("result", result)
    commit(types.GET_PersonalizedMv, result)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
