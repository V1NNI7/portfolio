import Image from 'next/image'
import {
  LuBrain,
  LuBrainCircuit,
  LuGraduationCap,
  LuHeartHandshake,
  LuSettings2,
} from 'react-icons/lu'
import myPhoto from '@/assets/images/Vinicius.jpg'

export default function About() {
  return (
    <>
      <section className="flex h-screen animate-fade-in-down items-center bg-transparent bg-gradient-radial-violet max-lg:h-full max-lg:py-16 max-sm:h-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 max-lg:grid-cols-1 max-sm:grid-cols-1">
            <div className="flex justify-center">
              <Image
                width={2296}
                height={4080}
                src={myPhoto}
                className="h-[620px] w-[420px] rounded-lg border-2 border-zinc-400 object-cover"
                alt="vinicius"
              />
            </div>

            <div className="mx-auto rounded-lg border border-zinc-400 bg-zinc-800/60 p-4 transition-colors">
              <h1 className="mb-4 text-4xl font-bold">Sobre Mim</h1>
              <p className="mb-4">
                Olá! Eu sou Vinicius Silveira Cezar, um desenvolvedor full stack
                e entusiasta da tecnologia. Com 21 anos, estou sempre em busca
                de novos desafios e aprendendo novas tecnologias. Desde a minha
                infância, fui fascinado por computadores e tecnologia, o que me
                levou a seguir uma carreira na área tecnológica.
              </p>
              <p className="mb-4">
                Iniciei minha jornada fazendo um curso de Design de Games, onde
                tive meu primeiro contato com programação. Embora tenha sido um
                conhecimento básico, despertou meu interesse em aprofundar meu
                conhecimento em computadores e software. Em seguida, fiz um
                curso técnico de informática, no qual aprendi sobre hardware e
                software, com foco especial no desenvolvimento web e mobile.
              </p>
              <p className="mb-4">
                Após alguns meses, consegui meu primeiro emprego na área de
                desenvolvimento web full stack, onde trabalhei com diversas
                tecnologias, incluindo React, Node.js, PHP, HTML5 e CSS3.
                Enquanto trabalhava, mantive o hábito de aprendizado contínuo,
                tornando-me autodidata. Dediquei-me a aprender novas tecnologias
                e aprimorar minhas habilidades.
              </p>
              <p className="mb-4">
                Recentemente, tive a oportunidade de trabalhar na área da
                educação, onde pude ajudar outras pessoas a trilhar seus
                caminhos no desenvolvimento full stack. É gratificante poder
                compartilhar meu conhecimento e auxiliar outras pessoas em sua
                jornada na tecnologia.
              </p>
              <p>
                Estou entusiasmado para enfrentar novos desafios e continuar meu
                crescimento profissional na área de desenvolvimento full stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de habilidades */}
      <section className="flex h-screen items-center bg-transparent bg-gradient-radial-violet max-sm:h-full max-sm:py-12">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-4xl font-bold">Habilidades</h1>

          <div className="grid grid-cols-3 justify-center gap-4 max-sm:grid-cols-1">
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-zinc-700 p-6 transition-colors hover:border-indigo-500 max-sm:h-72">
              <LuBrain className="text-6xl text-indigo-400" />

              <p className="text-justify">
                Autodidatismo como característica autônoma e proativa na busca
                por conhecimento e atualização constante.
              </p>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-zinc-700 p-6 transition-colors hover:border-indigo-500">
              <LuBrainCircuit className="text-6xl text-indigo-400" />

              <p className="text-justify">
                Aprendizado rápido e atualização constante com as últimas
                tendências e tecnologias.
              </p>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-zinc-700 p-6 transition-colors hover:border-indigo-500">
              <LuGraduationCap className="text-6xl text-indigo-400" />

              <p className="text-justify">
                Determinação para persistir diante de obstáculos e buscar
                resultados de qualidade.
              </p>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-zinc-700 p-6 transition-colors hover:border-indigo-500">
              <LuSettings2 className="text-6xl text-indigo-400" />

              <p className="text-justify">
                Adaptabilidade para enfrentar desafios e me ajustar a novos
                ambientes com flexibilidade.
              </p>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-zinc-700 p-6 transition-colors hover:border-indigo-500">
              <LuHeartHandshake className="text-6xl text-indigo-400" />

              <p className="text-justify">
                Empatia para compreender as necessidades dos usuários e criar
                soluções centradas neles.
              </p>
            </div>
            <div className="flex h-60 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-zinc-700 p-6 transition-colors hover:border-indigo-500">
              <LuHeartHandshake className="text-6xl text-indigo-400" />

              <p className="text-justify">
                Colaboração efetiva e harmoniosa para alcançar resultados
                excepcionais em equipe. Comunicação clara, sinergia e
                comprometimento mútuo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
