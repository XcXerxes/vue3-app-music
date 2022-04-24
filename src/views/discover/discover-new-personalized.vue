<template>
  <ms-title title="推荐新音乐" />
  <div class="grid grid-flow-row grid-cols-2 gap-2.5 cursor-pointer">
    <div
      class="flex items-center transition-all hover:bg-gray-200"
      v-for="item in personalizedNewSongs"
      :key="item.id"
    >
      <el-image
        class="w-12 h-12 rounded"
        lazy
        :src="item.picUrl"
        :alt="item.name"
      />
      <div class="px-2 flex-auto flex flex-col w-1/3 text-xs">
        <div class="flex-1">{{ item.name }}</div>
        <div class="mt-1.5 text-gray-400">{{ item.song.artists[0].name }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import msTitle from "@/components/common/ms-title.vue"
import { mapState } from "vuex"
export default defineComponent({
  components: {
    msTitle
  },
  computed: {
    ...mapState("discover", {
      personalizedNewSongs: (state: any) => state.personalizedNewSongs
    })
  },
  setup() {
    return {}
  }
})
</script>
