import { sanityClient } from '@/sanity/client'
import { notFound } from 'next/navigation'
import PortableTextRenderer from '@/components/PortableTextRenderer'

/**
 * Generate paths for all services at build time
 */
export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(`*[_type == "service" && defined(slug.current)][].slug.current`)
  return slugs.map((slug: string) => ({ slug }))
}

/**
 * Service page component
 */
export default async function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const query = `*[_type == "service" && slug.current == $slug][0]{
    title,
    shortDescription,
    body,
    image {
      asset -> { url, altText }
    },
    ctaText
  }`

  const service = await sanityClient.fetch(query, { slug })

  if (!service) return notFound()

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 mb-6">{service.shortDescription}</p>

      {service.image?.asset?.url && (
        <img
          src={service.image.asset.url}
          alt={service.image.altText || service.title}
          className="rounded-lg mb-6"
        />
      )}

      <div className="prose prose-lg max-w-none mb-10">
	  {service.body ? (
	    <PortableTextRenderer value={service.body} />
	  ) : (
	    <p>Ingen detaljert tekst enno.</p>
	  )}
	</div>

      <a
        href="/kontakt"
        className="inline-block bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800"
      >
        {service.ctaText || 'Ta kontakt'}
      </a>
    </main>
  )
}

