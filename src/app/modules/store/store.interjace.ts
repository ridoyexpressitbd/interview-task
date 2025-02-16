import { Types } from 'mongoose'

export type TStoreData = {
  owner: Types.ObjectId
  name: string
  currency: 'BDT'
  country: string
  email: string
  domain: string
  customDomain?: string
  category: string
}
