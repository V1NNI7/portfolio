
import Link from "next/link";
import { IoHome, IoPersonSharp, IoCall, IoGameController } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="flex items-center py-10 z-10 absolute w-full left-0 top-0 justify-center gap-4">
      <Link
        href="/"
        className="flex items-center cursor-pointer justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
      >
        <IoHome className="text-xl" /> Inicio
      </Link>
      <Link
        href="/about"
        className="flex items-center cursor-pointer justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
      >
        <IoPersonSharp className="text-xl" /> Sobre
      </Link>
      <Link
        href="/contact"
        className="flex items-center cursor-pointer justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
      >
        <IoCall className="text-xl" /> Contato
      </Link>
      <Link
        href="/games"
        className="flex items-center cursor-pointer justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
      >
        <IoGameController className="text-xl" /> Diversão
      </Link>
    </nav>
  )
}