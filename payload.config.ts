import path from 'path'
import { en } from 'payload/i18n/en'
import {
  AlignFeature,
  BlockquoteFeature,
  BlocksFeature,
  BoldFeature,
  ChecklistFeature,
  HeadingFeature,
  IndentFeature,
  InlineCodeFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  RelationshipFeature,
  UnorderedListFeature,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
//import { slateEditor } from '@payloadcms/richtext-slate'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import Users from '@/collections/Users'
import Tailors from '@/collections/Tailors'
import Orders from '@/collections/Orders'
import Media from '@/collections/Media'
import ItemCategories from '@/collections/supportingCollections/itemCategories'
import serviceOptions from '@/collections/supportingCollections/serviceOptions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  //editor: slateEditor({}),
  editor: lexicalEditor(),
  collections: [Users, Tailors, Orders, Media, ItemCategories, serviceOptions],
  // cors: [
  //   process.env.ADMIN_URL,
  //   process.env.TAILOR_URL,
  // ],
  // csrf: [
  //   process.env.ADMIN_URL,
  //   process.env.TAILOR_URL,
  // ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.POSTGRES_URI || ''
  //   }
  // }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    user: Users.slug,
    
    // autoLogin: {
    //   email: 'dev@payloadcms.com',
    //   password: 'test',
    //   prefillOnly: true,
    // },
  },
})
