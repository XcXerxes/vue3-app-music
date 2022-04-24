<template>
  <ms-title title="你的专属歌单" />
  <div class="grid grid-flow-row grid-cols-3 gap-5 lg:grid-cols-5">
    <div v-for="(item, index) in personalizedList" :key="index">
      <ms-cover-play
        :pic-url="item.picUrl"
        :video="false"
        :name="item.name"
        show-play-count
        :play-count="item.playCount"
      />
      <div class="mt-2 text-xs truncate">{{ item?.name }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { mapState } from "vuex"
import msTitle from "@/components/common/ms-title.vue"
import msCoverPlay from "@/components/common/ms-cover-play.vue"
export default defineComponent({
  components: {
    msTitle,
    msCoverPlay
  },
  computed: {
    ...mapState("discover", {
      personalizedList: (state: any) => state.personalizedList
    })
  },
  setup() {
    return {}
  }
})
</script>
