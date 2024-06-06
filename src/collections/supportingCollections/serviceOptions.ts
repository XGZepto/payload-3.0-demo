import { CollectionConfig } from 'payload/types'

const serviceOptions: CollectionConfig = {
    slug: 'serviceOptions',
    defaultSort: '-id',
    admin: {
      useAsTitle: 'name',
      group: 'Supporting Collections',
      defaultColumns: ['name'],
    },
    fields: [
      {
        name: 'name',
        required: true,
        localized: true,
        type: 'text',
        unique: true,
        admin: {
          placeholder: 'Shorten Sleeve',
        },
      },
      {
        name: 'serviceType',
        required: true,
        type: 'select',
        options: [
          {
            label: 'Alteration',
            value: 'alteration',
          },
          {
            label: 'Repair',
            value: 'repair',
          }
        ]
      },
      {
        name: 'description',
        required: true,
        localized: true,
        type: 'textarea',
        admin: {
          placeholder: 'Shorten Sleeve as per customer request',
        },
      },
      {
        name: 'price',
        required: true,
        type: 'number',
        admin: {
          position: 'sidebar',
        },
      },
    ],
    hooks: {
      beforeDelete: [
        // checkItemCategoryNotInItemSubcategories,
        // checkItemCategoryNotInCategoryCarouselSections,
        // checkItemCategoryNotInSubcategoryCarouselSections,
        // checkCategoryNotInProducts,
      ],
    },
  }
  
  export default serviceOptions
  