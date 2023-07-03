'use client'

import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsKanban, BsWindowPlus } from 'react-icons/bs'
import { IoBookSharp, IoGameController } from 'react-icons/io5'

import MultiCarouselTechs from '@/components/MultiCarouselTechs'

export default function Home() {
  return (
    <>
      <section className="relative flex h-screen w-full animate-fade-in-down flex-col items-center justify-center gap-4 bg-transparent bg-gradient-radial-violet">
        <div className="h-screen w-full bg-[url(../assets/images/lending-hero-bg.png)]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4">
            <h1 className="text-center text-6xl font-bold text-neutral-50 max-sm:text-4xl">
              Olá, eu sou o{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-indigo-400 text-transparent">
                Vinicius
              </span>
            </h1>
            <h2 className="text-center text-4xl font-bold text-neutral-50 max-sm:text-2xl">
              Sou Desenvolvedor Full Stack
            </h2>

            <div className="flex items-center justify-center gap-4">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                offset={0}
                className="flex w-28 cursor-pointer items-center justify-center gap-1 rounded-md p-2 text-neutral-200 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
              >
                <IoBookSharp className="text-xl" /> Projetos
              </ScrollLink>
              <Link
                href="/games"
                className="flex items-center justify-center gap-2 rounded-md p-2 text-neutral-50 transition-colors hover:bg-indigo-600/5 hover:text-indigo-400"
              >
                <IoGameController className="text-xl" /> Diversão
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative flex w-full animate-fade-in-down flex-col items-center justify-center gap-4 bg-transparent bg-gradient-radial-violet"
      >
        <div className="container mx-auto">
          <h1 className="py-10 text-4xl font-bold">Projetos em destaque</h1>

          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:m-2 max-sm:grid-cols-1">
            <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
              <BsKanban className="text-6xl" />
              <h2 className="text-4xl font-semibold">Kanbanify</h2>
              <p className="text-justify">
                Desenvolvi um projeto com o objetivo de fornecer uma ferramenta
                intuitiva para organizar e acompanhar minhas tarefas diárias.
                Utilizando o estilo Kanban, criei um quadro virtual onde posso
                visualizar e acompanhar o progresso das minhas atividades. Isso
                facilita a priorização das tarefas e o acompanhamento do avanço
                em direção aos meus objetivos.
              </p>
              <div className="flex w-full items-center">
                <a
                  target="__blank"
                  className="flex items-center gap-2 rounded-lg bg-neutral-950 px-4 py-2 transition-colors hover:bg-neutral-950/60"
                  href="https://github.com/v1nni7/Kanbanify-app"
                >
                  <AiOutlineGithub className="text-2xl" />
                  Github
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
              <BsWindowPlus className="text-6xl" />
              <h2 className="text-4xl font-semibold">Dashboard</h2>
              <p className="text-justify">
                Desenvolvi esse projeto com o intuito de fornecer uma solução
                abrangente para o controle de usuários, produtos, ganhos e
                perdas de um E-commerce. Com essa ferramenta, os administradores
                têm a capacidade de acompanhar e avaliar de forma eficiente o
                andamento de suas vendas e lucros.
              </p>
              <div className="flex w-full items-center">
                <a
                  target="__blank"
                  className="flex items-center gap-2 rounded-lg bg-neutral-950 px-4 py-2 transition-colors hover:bg-neutral-950/60"
                  href="https://github.com/v1nni7/dashboard-frontend"
                >
                  <AiOutlineGithub className="text-2xl" />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-screen w-full animate-fade-in-down flex-col items-center justify-center gap-4 bg-transparent bg-gradient-radial-violet">
        <div className="container mx-auto">
          <h1 className="mb-4 text-4xl font-bold">Principais Tecnologias</h1>

          <MultiCarouselTechs />
        </div>
      </section>
    </>
  )
}
