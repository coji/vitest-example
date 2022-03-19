import { render, waitFor, screen } from '@testing-library/vue'
import { server } from '../src/mocks/server'
import App from '../src/App.vue'
import './helper'

describe('describe', async () => {
  it('test1', async () => {
    const wrapper = render(App)
    await wrapper.findAllByText('Hello Mock!')
  })
})
