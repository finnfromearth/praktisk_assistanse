import { sanityClient } from '@/sanity/client'
import Link from 'next/link'

export const metadata = {
  title: 'Tenester | Praktisk assistanse',
  description:
    'Ei oversikt over tenestene til Praktisk assistanse – datahjelp, leksehjelp, øvingskøyring, praktisk hjelp, og meir.',
}

export default async function TenesterPage() {
  const services = await sanityClient.fetch(`*[_type == "service"] | order(title asc)`)

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Tenester</h1>

      <p className="text-center text-lg mb-10 text-gray-700">
        Med base på Osterøy tilbyr eg hjelp til allslags praktiske oppgåver.
      </p>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s: any) => (
          <article
            key={s._id}
            className="p-5 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-700 mb-3">{s.shortDescription}</p>
            <Link
              href={`/tenester/${s.slug.current}`}
              className="text-teal-700 font-medium hover:underline"
            >
              Les meir →
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}
