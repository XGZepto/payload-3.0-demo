import { CollectionConfig } from 'payload/types'
import { admins } from '../../access/admins'
import { ensureFirstUserIsAdmin } from './hooks/ensureFirstUserIsAdmin'

import { adminOrYourself } from '../../access/adminsOrYourself'

const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useAPIKey: true,
    depth: 0,
    cookies: {
      sameSite: 'none',
      secure: true,
      domain: process.env.DOMAIN,
    }
  },
  access: {
    read: adminOrYourself,
    create: admins,
    update: adminOrYourself,
    delete: admins,
  },
  admin: {
    useAsTitle: 'displayName',
  },
  fields: [
    {
      name: 'displayName',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      defaultValue: 'partner',
      required: true,
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
        {
          label: 'tailor',
          value: 'tailor',
        },
        {
          label: 'partner',
          value: 'partner',
        },
        {
          label: 'customer',
          value: 'customer',
        },
      ],
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      access: {
        read: admins,
        create: admins,
        update: admins,
      },
    },
    {
      name: 'boundTailor',
      type: 'relationship',
      relationTo: 'tailors',
      hasMany: false,
    },
  ],
}

export default Users
