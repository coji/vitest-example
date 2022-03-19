<script setup lang="ts">
import { onMounted, ref } from 'vue'

const test = ref('')
onMounted(
  async () =>
    (test.value = await fetch('/hello.txt')
      .then(async (res) => {
        return await res.text()
      })
      .catch((e) => {
        console.log('fetch error: ', e)
        return 'error!'
      }))
)
</script>

<template>
  <div>Hello {{ test }}</div>
</template>
