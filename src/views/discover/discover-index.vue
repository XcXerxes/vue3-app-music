<template>
  <div class="px-5">
    <h1 class="text-3xl font-bold pt-8 pb-4">推荐</h1>
    <ms-banner />
    <discover-personalized />
    <discover-new-personalized />
    <discover-mv />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue"
import { useStore } from "vuex"
import discoverPersonalized from "./discover-personalized.vue"
import discoverNewPersonalized from "./discover-new-personalized.vue"
import discoverMv from "./discover-mv.vue"
export default defineComponent({
  components: {
    discoverPersonalized,
    discoverNewPersonalized,
    discoverMv
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch("discover/getPersonalizedList")
      store.dispatch("discover/getPersonalizedNewSongs")
      store.dispatch("discover/getPersonalizedMv")
    })
    return {}
  }
})
</script>
