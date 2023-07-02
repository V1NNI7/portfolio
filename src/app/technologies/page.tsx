import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFastify,
} from 'react-icons/si'

export default function Technologies() {
  return (
    <section className="relative flex w-full animate-fade-in-down flex-col items-center justify-center gap-4 bg-transparent bg-gradient-radial-violet py-10">
      <div className="container mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Tecnologias</h1>

        <div className="grid grid-cols-5 gap-4">
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiHtml5 className="text-8xl text-orange-500" />

            <h2 className="text-4xl font-semibold">HTML5</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiCss3 className="text-8xl text-blue-500" />

            <h2 className="text-4xl font-semibold">CSS3</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiSass className="text-8xl text-pink-400" />

            <h2 className="text-4xl font-semibold">SASS</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiJavascript className="text-8xl text-yellow-400" />

            <h2 className="text-4xl font-semibold">JavaScript</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiTypescript className="text-8xl text-sky-700" />

            <h2 className="text-4xl font-semibold">TypeScript</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiReact className="text-8xl text-sky-400" />

            <h2 className="text-4xl font-semibold">React</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiNextdotjs className="text-8xl text-neutral-950" />

            <h2 className="text-4xl font-semibold">NextJs</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiNodedotjs className="text-8xl text-green-600" />

            <h2 className="text-4xl font-semibold">Node</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiExpress className="text-8xl text-neutral-950" />

            <h2 className="text-4xl font-semibold">Express</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiFastify className="text-8xl text-neutral-950" />

            <h2 className="text-4xl font-semibold">Fastify</h2>
          </div>
          <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
            <SiReact className="text-8xl  text-sky-500" />

            <h2 className="text-4xl font-semibold">React Native</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
