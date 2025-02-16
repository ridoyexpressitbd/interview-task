import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { StoreValidation } from './store.validation'
import { StoreControllers } from './store.controller'

const router = express.Router()

router.post(
  '/create',
  validateRequest(StoreValidation.createStoreValidationZodSchema),
  StoreControllers.taskCreateStore
)
// router.get('/', auth('user'), StoreControllers.getMyAllStores)
// router.get('/all', auth('admin', 'superAdmin'), StoreControllers.getAllStores)

export const StoreRoutes = router
