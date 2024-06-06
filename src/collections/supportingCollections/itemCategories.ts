import { CollectionConfig } from 'payload/types'

const ItemCategories: CollectionConfig = {
    slug: 'itemCategories',
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
          placeholder: 'Shirt',
        },
      },
      {
        name: 'availableServices',
        type: 'relationship',
        relationTo: 'serviceOptions',
        hasMany: true,
        required: true,
      }
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
  
  export default ItemCategories
  