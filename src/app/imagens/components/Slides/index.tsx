'use client'
import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import './styles.css'

import { EffectCards } from 'swiper/modules'

import ButtonDelete from '../ButtonDelete'

import { useSession } from 'next-auth/react'
import type { UserType } from '@/@types/User'

export default function Slides({ urls }: { urls: string[] }) {
  const session = useSession()
  const user = session.data?.user as UserType

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
              className="w-full h-full bg-cover relative"
              alt="Imagem de doação"
            />
            {user?.admin && <ButtonDelete/>}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
