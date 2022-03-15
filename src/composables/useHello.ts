import { ref, onMounted } from 'vue'

export const useHello = () => {
  const hello = ref({ message: '' })

  onMounted(async () => {
    const res = await fetch('/hello.txt')
    hello.value.message = await res.text()
  })

  return {
    hello,
  }
}
