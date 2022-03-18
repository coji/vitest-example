import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../src/mocks/server'

beforeAll(() => {
  window.location.href = 'http://localhost:3000'
  console.log('beforeAll', window.location.origin)
  server.listen()
})
afterEach(() => {
  console.log('afterEach', window.location.origin)
  server.resetHandlers()
})
afterAll(() => {
  console.log('afterAll', window.location.origin)
  server.close()
})
