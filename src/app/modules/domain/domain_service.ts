import { Store } from '../store/store.model'

// domain check from db.
const domainCheckFromDB = async (domain: string) => {
  const result = await Store.exists({ domain }).lean()
  const taken = !!result
  if (taken) {
    return { message: 'This domain is already taken!', taken }
  } else {
    return { message: 'This domain is available', taken }
  }
}

export const DomainServies = {
  domainCheckFromDB
}
