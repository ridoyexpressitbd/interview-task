import { Types } from 'mongoose'

export type TClient = {
  user: Types.ObjectId
  email: string
  name?: string
  phone?: string
}
