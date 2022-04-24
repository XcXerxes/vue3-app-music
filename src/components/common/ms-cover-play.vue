<template>
  <div
    class="cover-play-image"
    :class="{ 'aspect-square': !video, 'aspect-video': video }"
  >
    <el-image
      :src="picUrl"
      :alt="name"
      class="w-full bg-gray-50 object-cover"
    />
    <div class="mask flex justify-center items-center">
      <IconPark
        type="PlayOne"
        theme="filled"
        class="text-white play-icon opacity-0 transition-opacity hover:text-teal-400"
        :size="50"
        @click="$emit('onPlay')"
      />
    </div>
    <div v-if="showPlayCount" class="play-count">
      <IconPark :type="video ? 'Play' : 'Headset'" class="mr-1" :size="12" />
      <text>{{ playCount || 0 }} </text>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { IconPark } from "@icon-park/vue-next/es/all"
export default defineComponent({
  components: {
    IconPark
  },
  props: {
    video: {
      type: Boolean,
      default: false
    },
    picUrl: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    showPlayCount: {
      type: Boolean
    },
    playCount: {
      type: Number,
      default: 0
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="scss" scoped>
.cover-play-image {
  @apply relative cursor-pointer rounded-lg transition-all overflow-hidden;
  @apply hover:-translate-y-1;
  .mask {
    @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-500;
  }
  .play-count {
    @apply absolute bottom-1 right-1 text-white text-xs bg-black bg-opacity-80 px-2 py-0.5 flex items-center rounded-full;
  }
  &:hover {
    .mask {
      @apply bg-opacity-50;
      .play-icon {
        @apply opacity-100;
      }
    }
    .play-count {
      @apply opacity-0;
    }
  }
}
</style>
