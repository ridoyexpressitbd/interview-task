import { TStoreData } from './store.interjace'
import mongoose from 'mongoose'

const StoreSchema = new mongoose.Schema<TStoreData>(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Client id is required!'],
      ref: 'Owner'
    },
    name: {
      type: String,
      required: [true, 'Store name is requred!'],
      trim: true
    },
    currency: {
      type: String,
      required: [true, 'Currency is required!'],
      default: 'BDT',
      trim: true
    },
    country: {
      type: String,
      default: 'Bangladesh'
    },
    email: {
      type: String,
      required: [true, 'Email is required!'],
      trim: true
    },
    domain: {
      type: String,
      required: [true, 'Domain is required!'],
      unique: true,
      trim: true
    },
    customDomain: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      required: [true, 'Category is required!'],
      default: 'e-commerce',
      trim: true
    }
  },
  {
    timestamps: true
  }
)

export const Store = mongoose.model<TStoreData>('Store', StoreSchema)
