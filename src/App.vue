<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ky from 'ky'

const test = ref('')

onMounted(
  async () =>
    (test.value = await fetch('/hello.txt')
      .then(async (res) => {
        return await res.text()
      })
      .catch((e) => 'error!'))
)
</script>

<template>
  <div>Hello {{ test }}</div>
</template>
