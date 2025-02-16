import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { StoreServices } from './store.service'

// user create a new store. TASK
const taskCreateStore = catchAsync(async (req, res) => {
  const result = await StoreServices.taskCreateStoreIntoDB(req.body)
  sendResponse(res, {
    success: true,
    status: 200,
    message: 'Store created successfully!',
    data: result
  })
})

export const StoreControllers = {
  taskCreateStore
}
