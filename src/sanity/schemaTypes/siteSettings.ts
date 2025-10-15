import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Nettsideinnstillingar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel på nettsida',
      type: 'string',
      initialValue: 'Praktisk assistanse',
    }),
    defineField({
      name: 'description',
      title: 'Kort omtale',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'contact',
      title: 'Kontaktinformasjon',
      type: 'object',
      fields: [
        {name: 'phone', title: 'Telefon', type: 'string'},
        {name: 'email', title: 'E-post', type: 'string'},
        {name: 'address', title: 'Adresse', type: 'string'},
        {name: 'orgNumber', title: 'Organisasjonsnummer', type: 'string'},
        {name: 'serviceArea', title: 'Tjenesteområde', type: 'string'},
      ],
    }),
    defineField({
      name: 'languages',
      title: 'Språk',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: ['Norsk nynorsk', 'Norsk bokmål', 'English', 'Español'],
      },
    }),
    defineField({
      name: 'photo',
      title: 'Profilbilde',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
