<template>
  <el-scrollbar>
    <div class="mt-10" v-for="menuItem in menus" :key="menuItem.name">
      <div class="menu-title">{{ menuItem.name }}</div>
      <div
        class="menu-item hover-bg-main"
        v-for="menu in menuItem.menus"
        :key="menu.key"
        @click="click(menu)"
        :class="{ active: currentKey === menu.key }"
      >
        <IconPark :type="menu.icon" size="18" :theme="menu.theme" />
        <span class="ml-1">{{ menu.name }}</span>
      </div>
    </div>
  </el-scrollbar>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { useMenu } from "./useMenu"
import { IconPark } from "@icon-park/vue-next/es/all"

export default defineComponent({
  components: {
    IconPark
  },
  setup() {
    const { menus, currentKey, click } = useMenu()
    return {
      menus,
      currentKey,
      click
    }
  }
})
</script>
<style lang="scss" scoped>
.menu-title {
  @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
  @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}
.active {
  @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
