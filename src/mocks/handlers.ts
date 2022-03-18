import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/hello.txt', (_req, res, ctx) => {
    console.log('mock called!')
    return res(ctx.status(200), ctx.text('Mock!'))
  }),
]
