import mongoose from 'mongoose'
import { TClient } from './client.interface'

const ClientSchema = new mongoose.Schema<TClient>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'User ID is required!'],
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },

    name: {
      type: String
    },
    phone: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export const Client = mongoose.model<TClient>('Client', ClientSchema)
