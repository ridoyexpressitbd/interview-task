import express from 'express'
import { DomainControllers } from './domain_controller'

const router = express.Router()

router.get('/check/:domain', DomainControllers.getCheckDomain)

export const DomainRoutes = router
