import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import cart from './cart'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, cart], 
}
