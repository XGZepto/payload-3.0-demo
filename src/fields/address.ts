import type { Field } from 'payload/types'
import { states } from './utils/constants'
import { APIError } from 'payload/errors'

export const addressField: Field = {
  name: 'address',
  type: 'group',
  fields: [
    {
        type: 'row',
        fields: [
            {
                name: 'street',
                type: 'text',
                required: true,
            },
            {
                name: 'apt',
                type: 'text',
            },
            {
                name: 'city',
                type: 'text',
                required: true,
            },
            {
                name: 'state',
                type: 'select',
                options: states,
                required: true,
            },
            {
                name: 'zip',
                type: 'number',
                required: true,
                min: 1000,
                max: 99999,
                index: true,
            },
        ]
    }
  ],
  hooks: {
    beforeChange: [
        ( {value} ) => {
            const { zip } = value
            // make sure zip is an integer
            if (zip.toString().includes('.')) {
                throw new APIError('Zip code must be an integer', 400)
            }
            return value
        },
    ]
  }
}