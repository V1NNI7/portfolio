import { IoGameControllerOutline } from 'react-icons/io5'

export default function Games() {
  return (
    <section className="relative flex h-screen w-full animate-fade-in-down flex-col items-center justify-center gap-4 bg-transparent bg-gradient-radial-violet">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <h1 className="animate-pulse bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-center text-6xl font-bold text-indigo-400 text-transparent">
          Os jogos estão em desenvolvimento e em breve estarão disponíveis!
        </h1>
        <h2 className="flex items-center justify-center gap-2 text-6xl">
          <IoGameControllerOutline className="animate-pulse text-indigo-500 duration-1000" />
        </h2>
      </div>
    </section>
  )
}
