<!-- 搜索结果页tab组件 -->
<script setup lang="ts">
defineProps({
  data: {
    type: Array<{ label: string; value: string }>,
    required: true,
  },
  state: String,
})

const emit = defineEmits(['change'])

function changeTab(state: string) {
  emit('change', state)
}
</script>

<template>
  <div class="flex w-full mb-4 overflow-x-auto bg-white border-b rounded">
    <span
      v-for="item in data"
      :key="item.value"
      class="flex-shrink-0 px-4 py-3 text-sm text-gray-700 cursor-pointer hover:text-green-600"
      :class="{ 'tab-item-active': item.value === state }"
      @click="changeTab(item.value)"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<style>
.tab-item-active {
    border-bottom: 2px solid rgb(3, 168, 9);
    @apply text-green-400 border-green-500;
}
</style>
