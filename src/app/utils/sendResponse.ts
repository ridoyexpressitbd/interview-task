import { Response } from 'express'

type TSendResponse<T> = {
  status: number
  success: boolean
  message: string
  data: T
}

const sendResponse = <T>(res: Response, data: TSendResponse<T>) => {
  return res.status(data.status).json({
    status: data.status,
    succcess: data.success,
    message: data.message,
    data: data.data
  })
}

export default sendResponse
