<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const test = ref('')

onBeforeMount(
  async () =>
    (test.value = await fetch('/hello.txt')
      .then((res) => res.text())
      .catch((e) => 'error!'))
)
console.log(test.value)
</script>

<template>
  <div>Hello {{ test }}</div>
</template>
