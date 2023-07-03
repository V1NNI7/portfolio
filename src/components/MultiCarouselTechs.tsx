'use client'

import { Pagination, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiAmazonaws,
} from 'react-icons/si'
import { useCallback, useEffect, useState } from 'react'

export default function MultiCarouselTechs() {
  const [slidesPerview, setSlidesPerView] = useState(4)

  const getItemsPerView = () => {
    let query

    if (window.matchMedia('(max-width: 640px)').matches) {
      query = 'sm'
    } else if (window.matchMedia('(max-width: 768px)').matches) {
      query = 'md'
    } else if (window.matchMedia('(max-width: 1024px)').matches) {
      query = 'lg'
    } else if (window.matchMedia('(max-width: 1280px)').matches) {
      query = 'xl'
    }

    const slidesPerViewQuery: any = {
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4,
    }

    if (!query) return 1

    setSlidesPerView(slidesPerViewQuery[query])
  }

  const handleWindowResize = useCallback(() => {
    getItemsPerView()
  }, [])

  useEffect(() => {
    getItemsPerView()

    addEventListener('resize', handleWindowResize)

    return () => {
      removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  return (
    <Swiper
      initialSlide={0}
      slidesPerView={slidesPerview}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={false}
      spaceBetween={30}
      pagination={{
        type: 'bullets',
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiHtml5 className="text-8xl text-orange-500" />

          <h2 className="text-4xl font-semibold">HTML5</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiCss3 className="text-8xl text-blue-500" />

          <h2 className="text-4xl font-semibold">CSS3</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiSass className="text-8xl text-rose-400" />

          <h2 className="text-4xl font-semibold">SASS</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiJavascript className="text-8xl text-yellow-400" />

          <h2 className="text-4xl font-semibold">JavaScript</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiTypescript className="text-8xl text-sky-700" />

          <h2 className="text-4xl font-semibold">TypeScript</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiReact className="text-8xl text-sky-400" />

          <h2 className="text-4xl font-semibold">React</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiNextdotjs className="text-8xl text-neutral-950" />

          <h2 className="text-4xl font-semibold">NextJs</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiNodedotjs className="text-8xl text-green-600" />

          <h2 className="text-4xl font-semibold">Node</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiExpress className="text-8xl text-neutral-950" />

          <h2 className="text-4xl font-semibold">Express</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiMongodb className="text-8xl text-green-600" />

          <h2 className="text-4xl font-semibold">MongoDB</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiPostgresql className="text-8xl text-sky-700" />

          <h2 className="text-4xl font-semibold">PostgreSQL</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiMysql className="text-8xl text-orange-400" />

          <h2 className="text-4xl font-semibold">MySQL</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiPostgresql className="text-8xl text-sky-700" />

          <h2 className="text-4xl font-semibold">PostgreSQL</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiGit className="text-8xl text-orange-600" />

          <h2 className="text-4xl font-semibold">Git</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiDocker className="text-8xl text-sky-700" />

          <h2 className="text-4xl font-semibold">Docker</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-72 flex-col items-center justify-center gap-4 rounded-lg border border-zinc-500 bg-neutral-700 p-6 transition-colors hover:border-indigo-500">
          <SiAmazonaws className="text-8xl text-slate-800" />

          <h2 className="text-4xl font-semibold">Amazon Web Service</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
