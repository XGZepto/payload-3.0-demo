import type { Access } from 'payload/config'
import { User } from '../payload-types'

export const adminOrYourself: Access = ({ req: { user } }: { req: { user: User } }) => {
  if (user && 'admin' === user.role) {
    return true
  }
  if (user) {
    return {
      id: {
        equals: user.id,
      },
    }
  }
  return false
}
