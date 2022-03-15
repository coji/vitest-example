import { expect, test, beforeAll, afterEach, afterAll } from 'vitest'
import { server } from '../src/mocks/server'
import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

beforeAll(() => {
  server.listen()
  window.location.href = 'http://localhost:3000/'
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('App', () => {
  const wrapper = mount(App)
  expect(wrapper.text()).toContain('Hello')
})
