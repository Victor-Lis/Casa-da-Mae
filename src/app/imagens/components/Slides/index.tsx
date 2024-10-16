'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import './styles.css'

import { EffectCards } from 'swiper/modules'

export default function Slides({ urls }: { urls: string[] }) {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper max-sm:w-52"
    >
      {urls?.map(url => {
        return (
          <SwiperSlide key={url}>
            <img
              src={url}
              className="w-full h-full bg-cover"
              alt="Imagem de doação"
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
