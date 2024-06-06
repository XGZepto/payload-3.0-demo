import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrLoggedIn } from '../../access/adminsOrLoggedIn'
import { adminsOrBound } from './access/adminsOrBound'

import { addressField } from '../../fields/address'

const Tailors: CollectionConfig = {
  slug: 'tailors',
  admin: {
    useAsTitle: 'businessName',
    defaultColumns: ['businessName', 'createdAt'],
  },
  // hooks: {
  // },
  access: {
    read: adminsOrBound,
    update: admins,
    create: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'businessName',
      type: 'text',
      required: true,
    },
    {
			name: 'contactPerson',
			type: 'text',
			required: false,
    },
    {
      name: 'phoneNumber',
      type: 'number',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    addressField,
    {
        name: 'website',
        type: 'text',
    },
  ],
}

export default Tailors