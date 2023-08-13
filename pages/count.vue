<script setup lang="ts">
import { useCounter } from '../composables/counter'

// 全局状态
const counter = useCounter() as Ref<number>
// const counter = useState("counter", () => Math.round(Math.random()*1000))
</script>

<template>
  <div class="p-4">
    Counter: {{ counter }}
    <div class="mt-2">
      <NButton
        @click="
          counter++;
        "
      >
        +
      </NButton>
      <NButton
        @click="
          counter--;
        "
      >
        -
      </NButton>
    </div>
  </div>
</template>
