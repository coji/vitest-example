import { rest } from 'msw'

export const handlers = [
  rest.get('/hello.txt', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.text('Mock!'))
  }),
  rest.get('/hoge', (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        message: 'Error!',
      })
    )
  }),
]
