import mongoose from 'mongoose'
import { TUser, UserModel } from './user.interface'
import { UserRole, UserStatus } from './user.constant'
import bcrypt from 'bcrypt'
import config from '../../config'

const UserSchema = new mongoose.Schema<TUser, UserModel>(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      select: 0
    },
    passwordChangedAt: {
      type: Date
    },
    role: {
      type: String,
      enum: UserRole,
      default: 'user'
    },
    status: {
      type: String,
      enum: UserStatus,
      default: 'in-progress'
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

// pre save hook / middleware for password bcrypt.
UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  )

  next()
})

//post save hook / middleware for password null.
UserSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

//statics methods for user already Exists by _id / mongodb default _id
UserSchema.statics.isUserAlreadyExistsBy_id = async function (_id: string) {
  return await User.findById(_id).select('+password')
}

//statics methods for user already Exists by email
UserSchema.statics.isUserAlreadyExistsBy_email = async function (
  email: string
) {
  return await User.findOne({ email }).select('+password')
}

//statics methods for user password matched.
UserSchema.statics.isPasswordMached = async function (
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword)
}

//statics methods for user change password time.
UserSchema.statics.isJWTIssuedAtBeforePasswordChanged = async function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  const passwordChangeTime = new Date(passwordChangedTimestamp).getTime() / 1000
  const passwordChangeTimeInt = parseInt(passwordChangeTime.toString())

  return passwordChangeTimeInt > jwtIssuedTimestamp
}

//create User Model.
export const User = mongoose.model<TUser, UserModel>('User', UserSchema)
