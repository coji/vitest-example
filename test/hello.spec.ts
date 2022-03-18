import { render } from '@testing-library/vue'
import { server } from '../src/mocks/server'
import App from '../src/App.vue'
import './helper'

beforeAll(() => {
  console.log('---before all---', window.location.origin)
})

describe('describe', () => {
  window.location.href = 'http://localhost:3000/'
  const wrapper = render(App)

  console.log('describe', window.location.origin)

  it('test1', async () => {
    console.log('test1', window.location.origin)
  })

  it('test2', async () => {
    console.log('test2', window.location.origin)
  })

  it('test3', async () => {
    console.log('test3', window.location.origin)
  })
})
