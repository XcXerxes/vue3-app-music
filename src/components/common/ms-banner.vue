<template>
  <el-carousel type="card" indicator-position="none">
    <el-carousel-item v-for="item in banners" :key="item.bannerId">
      <el-image :src="item.pic" />
    </el-carousel-item>
  </el-carousel>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue"
import { mapState, useStore } from "vuex"
export default defineComponent({
  computed: {
    ...mapState("global", {
      banners: (state: any) => state.banners
    })
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch("global/getBanners")
    })
    return {}
  }
})
</script>
