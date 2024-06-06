import type { User } from '../../payload-types'

export const checkRole = (roles: User['role'] | User['role'][], user?: User): boolean => {
  if (user) {
    if (Array.isArray(roles)) {
      return roles.includes(user.role)
    } else {
      return user.role === roles
    }
  }
  return false
}
