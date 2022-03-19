import { render, waitFor, screen } from '@testing-library/vue'
import { server } from '../src/mocks/server'
import App from '../src/App.vue'

describe('describe', async () => {
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

  it('test1', async () => {
    const wrapper = render(App)
    expect(await wrapper.findAllByText('Hello Mock!')).toBeTruthy()
  })
})
