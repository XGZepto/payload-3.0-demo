import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { adminsOrTailorsOrOrderedBy } from './access/adminsOrTailorsOrOrderedBy'
import { populateOrderedBy } from './hooks/populateOrderedBy'

import { addressField } from '../../fields/address'
import { orderStatusOptions, invoiceStatusOptions } from './utils/constants'
import { adminsOrPartners } from '../../access/adminsOrPartners'

import { handleStatusChange } from './hooks/handleStatusChange'

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'contactPerson',
    defaultColumns: ['contactPerson', 'createdAt', 'orderedBy', 'status'],
  },
  access: {
    read: adminsOrTailorsOrOrderedBy,
    update: adminsOrTailorsOrOrderedBy,
    create: adminsOrPartners,
    delete: admins,
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      options: orderStatusOptions,
      defaultValue: 'pending',
      required: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [handleStatusChange],
      }
    },
    {
      name: 'orderedBy',
      type: 'relationship',
      relationTo: 'users',
      hooks: {
        beforeChange: [populateOrderedBy],
      },
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'tailoredBy',
      type: 'relationship',
      relationTo: 'tailors',
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'charge',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'tailorFee',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
      }
    },
    {
      name: 'invoiceStatus',
      type: 'select',
      options: invoiceStatusOptions,
      defaultValue: 'notCreated',
      admin: {
        position: 'sidebar',
      }
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Items',
          fields: [
            {
              name: 'items',
              type: 'array',
              fields: [
                {
                  name: 'item',
                  type: 'group',
                  fields: [
                    {
                      name: 'itemName',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'itemCategory',
                      type: 'relationship',
                      relationTo: 'itemCategories',
                    },
                  ]
                },
                {
                  name: 'services',
                  type: 'array',
                  fields: [
                    {
                      name: 'service',
                      type: 'relationship',
                      relationTo: 'serviceOptions',
                    },
                    {
                      name: 'serviceDetail',
                      type: 'group',
                      fields: [
                        {
                          name: 'serviceLocation',
                          type: 'text',
                        },
                        {
                          name: 'description',
                          type: 'text',
                        }
                      ]
                    }
                  ]
                },
                {
                  name: 'attachedMessage',
                  type: 'textarea',
                },
                {
                  name: 'attachedImages',
                  type: 'array',
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                    }
                  ]
                }
              ],
            },
          ]
        },
        {
          label: 'Contact Info',
          fields: [
            {
              name: 'contactPerson',
              type: 'text',
            },
            {
              name: 'phoneNumber',
              type: 'number',
            },
            {
              name: 'email',
              type: 'email',
            },
            addressField,
          ]
        },
      ]
    },
  ],
}

export default Orders
