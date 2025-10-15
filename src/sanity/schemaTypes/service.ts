import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Teneste',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tittel', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug (del av URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({ name: 'shortDescription', title: 'Kort omtale', type: 'text', rows: 3 }),
    // 👇 updated field
    defineField({
      name: 'body',
      title: 'Detaljert beskrivelse',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal tekst', value: 'normal' },
            { title: 'Overskrift 1', value: 'h1' },
            { title: 'Overskrift 2', value: 'h2' },
            { title: 'Overskrift 3', value: 'h3' },
          ],
          lists: [
            { title: 'Punktliste', value: 'bullet' },
            { title: 'Nummerert liste', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Feit', value: 'strong' },
              { title: 'Kursiv', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lenkje',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to action (tekst på knapp)',
      type: 'string',
      initialValue: 'Ta kontakt for ein uforpliktande prat!',
    }),
    defineField({ name: 'image', title: 'Bilete', type: 'image', options: { hotspot: true } }),
  ],
})

