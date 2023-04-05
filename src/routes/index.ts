import { Application, Router } from 'express'
import tesRouter from './tes.route'
import productRouter from './product.route'
import authRouter from './auth.route'

const _routes: Array<[string, Router]> = [
  ['/tes', tesRouter],
  ['/product', productRouter],
  ['/user', authRouter]
]

const routes = (app: Application) => {
  _routes.forEach(([url, router]) => {
    app.use(url, router)
  })
}

export default routes
