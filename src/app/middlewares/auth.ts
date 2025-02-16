import { TUserRole } from '../modules/users/user.interface'
import catchAsync from '../utils/catchAsync'

// initiate authentication route auth function
const auth = (...requiredRole: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization
  })
}

export default auth
