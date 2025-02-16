import express from 'express'
import { StoreRoutes } from '../modules/store/store.route'
const routers = express.Router()

const moduleRoutes = [
  {
    path: '/stores',
    route: StoreRoutes
  }
]

moduleRoutes.forEach(route => {
  routers.use(route.path, route.route)
})

export default routers
