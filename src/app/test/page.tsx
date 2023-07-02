'use client'

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { Pagination, Navigation } from 'swiper'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si'

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
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
      </Swiper>
    </>
  )
}
