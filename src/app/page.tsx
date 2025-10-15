import { sanityClient } from '@/sanity/client'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source: any) {
  return builder.image(source).width(300).height(300).url()
}

export const metadata = {
  title: 'Praktisk assistanse | Hjelp til sjølvhjelp',
  description:
    'Finn Røsland Praktisk assistanse – hjelp med data, praktiske oppgåver og meir. Osterøy, Bergen og omegn.',
}

export default async function Home() {
  const site = await sanityClient.fetch(`*[_type == "siteSettings"][0]`)
  const services = await sanityClient.fetch(`*[_type == "service"] | order(title asc)`)

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-center">
      {/* HERO SECTION */}
      <section className="mb-20">
        {site?.photo ? (
          <img
            src={urlFor(site.photo)}
  				alt="Portrett av Finn Røsland"
  				className="mx-auto w-40 h-40 rounded-full mb-6 ring-4 ring-teal-500/30 object-cover shadow-lg"
          />
        ) : (
          <img
            src="/file.svg"
            alt="Portrett av Finn Røsland"
            className="mx-auto w-40 h-40 rounded-full mb-6 opacity-70"
          />
        )}

        <h1 className="text-5xl font-bold text-teal-700 mb-4">
          {site?.title || 'Praktisk assistanse'}
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          {site?.description ||
            'Hjelp til sjølvhjelp – frå datahjelp til praktiske oppgåver i hus og hage. Eg hjelper deg å få gjort det du treng, med eit smil og ein kopp kaffi om du vil ☕'}
        </p>

			<Link
			  href="/kontakt"
			  className="inline-block bg-brand-dark text-white px-6 py-3 rounded-md shadow hover:bg-brand transition"
			>
			  Ta kontakt →
			</Link>



      </section>

      <section className="mb-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 text-left">
          {services.slice(0, 4).map((s: any) => (
            <article
              key={s._id}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{s.title}</h3>
              <p className="text-gray-700 mb-3">{s.shortDescription}</p>
              <Link
                href={`/tenester/${s.slug.current}`}
                className="text-[var(--color-brand)] hover:underline font-medium"
              >
                Les meir →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-teal-50 py-12 rounded-lg text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Klar for ein prat?
        </h2>
        <p className="text-gray-700 mb-6">
          Ta kontakt for ein uforpliktande samtale om korleis eg kan hjelpa deg.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition"
        >
          Kontakt meg →
        </Link>
      </section>
    </main>
  )
}
