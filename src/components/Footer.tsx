import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-800 py-6">
      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className="text-center text-neutral-200">
          Feito com ❤️ por Vinicius 👋🏽{' '}
          <Link
            href="/contact"
            className="text-indigo-400 transition-colors hover:text-indigo-500"
          >
            Entre em contato
          </Link>{' '}
        </h4>
        <p className="text-center text-neutral-200">
          <span className="text-indigo-400 transition-colors hover:text-indigo-500">
            My Portfolio
          </span>{' '}
          é um projeto de código aberto hospedado na{' '}
          <a
            href="https://vercel.com/"
            target='__blank'
            className="text-indigo-400 transition-colors hover:text-indigo-500"
          >
            Vercel{' '}
          </a>
          © 2023.
        </p>
      </div>
    </footer>
  )
}
