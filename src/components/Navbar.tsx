'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  IoHome,
  IoCall,
  IoPersonSharp,
  IoGameController,
} from 'react-icons/io5'

export default function Navbar() {
  const [windowScrolled, setWindowScrolled] = useState(false)

  const handleScroll = () => {
    const { scrollY } = window

    if (scrollY > 150) {
      setWindowScrolled(true)
      return
    }

    setWindowScrolled(false)
  }

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`max-sm:text-md fixed z-10 flex w-full items-center justify-center gap-4 py-4 transition-all duration-700 max-sm:p-4 ${
          windowScrolled ? 'bg-zinc-700' : 'bg-transparent'
        }`}
      >
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
        >
          <IoHome className="text-xl max-sm:hidden" /> Inicio
        </Link>
        <Link
          href="/about"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
        >
          <IoPersonSharp className="text-xl max-sm:hidden" /> Sobre
        </Link>
        <Link
          href="/contact"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
        >
          <IoCall className="text-xl max-sm:hidden" /> Contato
        </Link>
        <Link
          href="/games"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
        >
          <IoGameController className="text-xl max-sm:hidden" /> Diversão
        </Link>
      </nav>
    </>
  )
}
