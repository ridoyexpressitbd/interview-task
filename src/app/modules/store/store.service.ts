import { TStoreData } from './store.interjace'
import { Store } from './store.model'
import AppError from '../../errors/AppError'
import { Types } from 'mongoose'
import { Owner } from '../owner/owner.model'

// create a new store into db
const taskCreateStoreIntoDB = async (payload: TStoreData) => {
  const user_id = '67a1066a1ad7ae4f925067f4'
  const owner = await Owner.findById(user_id)

  if (!owner) {
    throw new AppError(404, 'Owner information not found!')
  }
  payload.owner = owner?._id as Types.ObjectId
  payload.domain = `${payload.domain}.expressitbd.com`

  const result = await Store.create(payload)

  return result
}

export const StoreServices = {
  taskCreateStoreIntoDB
}
