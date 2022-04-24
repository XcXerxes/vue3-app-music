<template>
  <div class="w-screen h-screen flex">
    <music-menu />
    <div class="flex-1">
      <el-scrollbar>
        <router-view></router-view>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
export default defineComponent({
  data() {
    return {
      name: "root-view"
    }
  }
})
</script>
