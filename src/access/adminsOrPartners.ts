import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isAdmin = (args: AccessArgs<unknown, User>) => boolean

export const adminsOrPartners: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin', 'partner'], user)
}
