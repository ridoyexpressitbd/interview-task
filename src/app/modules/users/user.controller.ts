import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.service'

// create user controller.
const createUser = catchAsync(async (req, res) => {
  // store result.
  const result = await UserServices.createUserIntoDB(req.body)
  const { accessToken, refreshToken } = result

  //set refresh token in cookie
  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true
  })

  // send output or result.
  sendResponse(res, {
    status: 201,
    success: true,
    message: 'User is created Successfully',
    data: {
      token: accessToken
    }
  })
})

export const UserController = {
  createUser
}
