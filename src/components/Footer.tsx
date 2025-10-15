export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-5xl mx-auto px-6 py-4 text-center text-sm text-gray-600">
        <p>
          © {year} Finn Røsland Praktisk assistanse · Osterøy, Bergen og omegn
        </p>
        <p>
          <a href="mailto:finn.from.earth@gmail.com" className="text-blue-700 underline">
            finn.from.earth@gmail.com
          </a>{' '}
          · <a href="tel:+4740073166" className="text-blue-700 underline">+47 400 73 166</a>
        </p>
      </div>
    </footer>
  )
}
