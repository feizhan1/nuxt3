<script setup lang="ts">
import type { Column, Course } from '.prisma/client'
import type { PropType } from 'vue'

const props = defineProps({
  data: { type: Object as PropType<Course | Column>, required: true },
  type: String,
})

function open() {
  if (props.type === 'course')
    navigateTo(`/course/detail/${props.data!.id}`)
  else
    navigateTo(`/column/detail/${props.data!.id}`)
}
</script>

<template>
  <NCard
    class="cursor-pointer mb-5 shadow-md !border-0"
    footer-style="padding:0;"
    @click="open"
  >
    <template #cover>
      <img
        :src="data.cover"
        class="w-[100%] h-[150px]"
      >
    </template>
    <div class="pt-2">
      <span class="w-full font-semibold font-bold truncate">
        {{ data.title }}
      </span>
    </div>
    <div class="flex mt-2">
      <div v-if="'price' in data">
        <span class="font-bold text-green-600">
          🌱 {{ data.price }}
        </span>
        <span class="ml-2 text-xs text-gray-500 line-through">
          {{ data.oPrice }}
        </span>
      </div>

      <span v-else>🌱 免费</span>
    </div>
  </NCard>
</template>
