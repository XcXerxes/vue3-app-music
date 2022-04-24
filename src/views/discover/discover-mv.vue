<template>
  <ms-title title="推荐MV"></ms-title>
  <div class="grid grid-flow-row grid-cols-2 gap-5 lg:grid-cols-4">
    <ms-cover-play
      v-for="item in mvList"
      :key="item.id"
      :picUrl="item.picUrl"
      :video="true"
      :name="item.name"
      show-play-count
      :play-count="item.playCount"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import msTitle from "@/components/common/ms-title.vue"
import msCoverPlay from "@/components/common/ms-cover-play.vue"
import { mapState } from "vuex"
export default defineComponent({
  components: {
    msTitle,
    msCoverPlay
  },
  computed: {
    ...mapState("discover", {
      mvList: (state: any) => state.mvList
    })
  },
  setup() {
    return {}
  }
})
</script>
