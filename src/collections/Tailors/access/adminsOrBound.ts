import type { Access } from 'payload/config'

import { checkRole } from '../../Users/checkRole'

export const adminsOrBound: Access = ({ req: { user } }) => {
  if (checkRole('admin', user)) {
    return true
  }

  return {
    id: {
      equals: user?.boundTailor,
    },
  }
}