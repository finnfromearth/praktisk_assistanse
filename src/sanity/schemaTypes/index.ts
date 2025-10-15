import { type SchemaTypeDefinition } from 'sanity'

import service from './service'
import siteSettings from './siteSettings'
import about from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service, siteSettings, about],
}
