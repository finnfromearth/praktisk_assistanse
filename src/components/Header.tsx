import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-100 border-b">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-6">
        <Link href="/" className="text-xl font-bold text-teal-700 hover:text-teal-800">
          Praktisk assistanse
        </Link>

        <ul className="flex gap-4 text-gray-700">
          <li>
            <Link href="/" className="hover:text-teal-800">
              Heim
            </Link>
          </li>
          <li>
            <Link href="/tenester" className="hover:text-teal-800">
              Tenester
            </Link>
          </li>
          <li>
            <Link href="/om-meg" className="hover:text-teal-800">
              Om meg
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-teal-800">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
