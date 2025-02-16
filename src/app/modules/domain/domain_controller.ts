import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { DomainServies } from './domain_service'

// domain check is availabe or not avaible.
const getCheckDomain = catchAsync(async (req, res) => {
  const result = await DomainServies.domainCheckFromDB(req.params.domain)

  sendResponse(res, {
    status: 200,
    success: true,
    message: 'Domain checked Success!',
    data: result
  })
})

export const DomainControllers = {
  getCheckDomain
}
