<template>
  <div class="text-xl py-3 mt-2 flex items-center">
    <div>{{ title }}</div>
    <IconPark type="right" size="25" :stroke-width="2" />
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
    title: {
      type: String,
      default: ""
    }
  }
})
</script>
