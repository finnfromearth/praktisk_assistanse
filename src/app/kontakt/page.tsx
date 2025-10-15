import { sanityClient } from '@/sanity/client'

export default async function Kontakt() {
  const site = await sanityClient.fetch(`*[_type == "siteSettings"][0]{
    contact { phone, email, address, serviceArea }
  }`)

  return (
    <main className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>

      <p className="text-lg mb-8">
        Ta gjerne kontakt for ein uforpliktande prat om korleis eg kan hjelpa deg.
      </p>

      <div className="space-y-3">
        <p>
          <strong>Telefon:</strong>{' '}
          <a href={`tel:${site?.contact?.phone}`} className="text-blue-700 underline">
            {site?.contact?.phone}
          </a>
        </p>

        <p>
          <strong>E-post:</strong>{' '}
          <a href={`mailto:${site?.contact?.email}`} className="text-blue-700 underline">
            {site?.contact?.email}
          </a>
        </p>

        <p>
          <strong>Adresse:</strong> {site?.contact?.address}
        </p>

        <p>
          <strong>Område:</strong> {site?.contact?.serviceArea}
        </p>
      </div>
    </main>
  )
}
