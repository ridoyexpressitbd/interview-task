import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validationZodSchema'
import { AuthController } from './auth.contoller'

const router = express.Router()

//this route for user login.
router.post(
  '/login',
  validateRequest(AuthValidation.loginValidationZodSchema),
  AuthController.loginUser
)

// export this routes.
export const AuthRoutes = router
