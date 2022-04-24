import { ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

interface IMenu {
  name: string
  key: string
  icon: any
  theme: "outline" | "filled" | "two-tone" | "multi-color"
}
interface IMenus {
  name: string
  menus: IMenu[]
}

export function useMenu() {
  const menus: IMenus[] = [
    {
      name: "在线音乐",
      menus: [
        {
          name: "推荐",
          key: "discover",
          icon: "planet",
          theme: "outline"
        },
        {
          name: "音乐馆",
          key: "music",
          icon: "planet",
          theme: "outline"
        },
        {
          name: "视频",
          key: "video",
          icon: "planet",
          theme: "outline"
        },
        {
          name: "电台",
          key: "voice",
          icon: "planet",
          theme: "outline"
        }
      ]
    },
    {
      name: "我的音乐",
      menus: [
        {
          name: "推荐",
          key: "discover",
          icon: "planet",
          theme: "outline"
        }
      ]
    }
  ]
  // 路由
  const route = useRoute()
  const currentKey = ref(route.meta.menu)
  const router = useRouter()

  // 监听路由的变化
  watch(
    () => route.meta.menu,
    (menu) => {
      currentKey.value = menu
    }
  )
  const click = async (menu: IMenu) => {
    await router.replace({ name: menu.key })
  }
  return {
    menus,
    click,
    currentKey
  }
}
