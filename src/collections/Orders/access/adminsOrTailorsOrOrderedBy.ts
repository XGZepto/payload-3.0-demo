import type { Access } from 'payload/config'

import { checkRole } from '../../Users/checkRole'

export const adminsOrTailorsOrOrderedBy: Access = ({ req: { user } }) => {
  if (checkRole('admin', user)) {
    return true
  }

  if (checkRole('tailor', user)) {
    return true
  }

  return {
    orderedBy: {
      equals: user?.id,
    },
  }
}
