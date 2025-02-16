import express from 'express'
import { StoreRoutes } from '../modules/store/store.route'
import { DomainRoutes } from '../modules/domain/domain_route'
const routers = express.Router()

const moduleRoutes = [
  {
    path: '/stores',
    route: StoreRoutes
  },
  {
    path: '/domains',
    route: DomainRoutes
  }
]

moduleRoutes.forEach(route => {
  routers.use(route.path, route.route)
})

export default routers
