import httpApi from "./request"

// 获取banner
export async function getBanner() {
  return httpApi.get("/banner", { type: 1 })
}
// 推荐新歌单
export async function getPersonalizedList() {
  return httpApi.get("/personalized")
}
// 推荐新音乐
export async function getPersonalizedNewList() {
  return httpApi.get("/personalized/newsong")
}
// 推荐新音乐
export async function getPersonalizedMv() {
  return httpApi.get("personalized/mv")
}
