/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import config from '../../config'
import AppError from '../../errors/AppError'
import { TJwtPayload } from '../auth/auth.interface'
import { createToken } from '../auth/auth.utils'
import { TClient } from '../client/client.interface'
import { Client } from '../client/client.model'
import { TUser } from './user.interface'
import { User } from './user.model'

// create a user into db.
const createUserIntoDB = async (payload: TUser) => {
  //checking , user already exists or not.
  if (await User.isUserAlreadyExistsBy_email(payload.email)) {
    throw new AppError(400, 'This user already exists!')
  }

  const clientData: Partial<TClient> = {}
  //create a session
  const session = await mongoose.startSession()

  try {
    //start session.
    session.startTransaction()

    //apply transaction 1
    const newUser = await User.create([payload], { session })

    if (!newUser.length) {
      throw new AppError(400, 'Failed to Create User')
    }

    //set client information from user data.
    clientData.user = newUser[0]._id
    clientData.email = newUser[0].email

    //apply transaction 2
    const newClient = await Client.create([clientData], { session })
    if (!newClient.length) {
      throw new AppError(400, 'Failed to Create User')
    }

    // transaction success then data save.
    await session.commitTransaction()

    // set jwt payload for token.
    const jwtPayload: TJwtPayload = {
      user_id: newUser[0]._id,
      role: newUser[0].role
    }

    // create a access token
    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_token_secret as string,
      config.jwt_access_token_expires_in as string
    )

    //create a refresh token
    const refreshToken = createToken(
      jwtPayload,
      config.jwt_refresh_token_secret as string,
      config.jwt_refresh_token_expires_in as string
    )

    //return access and refresh token.
    return { accessToken, refreshToken }
  } catch (err: any) {
    //session cancel.
    await session.abortTransaction()
    throw new AppError(400, err.message)
  } finally {
    //end session
    await session.endSession()
  }
}

export const UserServices = {
  createUserIntoDB
}
