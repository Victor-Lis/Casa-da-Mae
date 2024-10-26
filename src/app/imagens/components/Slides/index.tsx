'use client'
import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import type { ImageType } from '@/@types/ImageType'

import 'swiper/css'
import 'swiper/css/effect-cards'

import './styles.css'

import { EffectCards } from 'swiper/modules'

import ButtonDelete from '../ButtonDelete'

import { useSession } from 'next-auth/react'
import type { UserType } from '@/@types/User'

export default function Slides({ images }: { images: ImageType[] }) {
  const session = useSession()
  const user = session.data?.user as UserType
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper max-sm:w-52"
    >
      {images?.map(image => {
        return (
          <SwiperSlide key={`${image.url}+${image.id}`}>
            <img
              src={image.url}
              className="w-full h-full bg-cover relative"
              alt="Imagem de doação"
            />
            {user?.admin && <ButtonDelete id={image.id} />}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
