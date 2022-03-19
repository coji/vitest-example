import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../src/mocks/server'

beforeAll(() => {
  window.location.href = 'http://localhost:3000'
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => {
  server.close()
})
