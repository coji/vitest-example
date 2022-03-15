<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useHello } from './composables/useHello'
import Hello from './components/Hello.vue'
const { hello } = useHello()
</script>

<template>
  <div>Hello! {{ hello.message }}</div>
</template>
