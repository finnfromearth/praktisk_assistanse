import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Om meg',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      initialValue: 'Om meg',
    }),
    defineField({
      name: 'photo',
      title: 'Bilete',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Tekst',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
