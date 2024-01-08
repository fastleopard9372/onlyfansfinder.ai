"use client";
import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Card from "@/components/card/Card";
import CreatorItem from "@/components/creatorItem";
import { useAppSelector } from "@/redux/hooks";
import { getData } from "@/redux/features/articleSlice";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Body = () => {
  const data = useAppSelector(getData);
  return (
    <div className='flex flex-row'>
      <div className='sm:w-[420px] sm:min-w-[420px] max-sm:hidden h-[100px]'></div>
      <div className='flex flex-col justify-center items-center w-[420px]  max-sm:hidden h-screen absolute top-0 px-3 z-0 bg-[#F6F6F6]'>
        <div className='h-[125px] w-full'></div>
        <div className='h-full overflow-y-auto'>
          <div className='text-[18px] font-normal text-left w-full px-4'>
            <div className='opacity-95'>Recently seen</div>
            <div className='my-10'>
              {
                data.map((value, index) => (
                  <CreatorItem {...value} key={index} />
                ))
              }
            </div>
            <div className='w-full text-center'>
              <a href="#" className='opacity-85 hover:opacity-50'>View More...</a>
            </div>
          </div>
          <div className='text-[18px] font-normal text-left w-full px-4 pb-3'>
            <div className='opacity-95'>Recently like</div>
            <div className='my-10'>
              {
                data.map((value, index) => (
                  <CreatorItem {...value} key={index} />
                ))
              }
            </div>
            <div className='w-full text-center'>
              <a href="#" className='opacity-85 hover:opacity-50'>View More...</a>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-hidden'>
        <div className='flex flex-row px-10 max-sm:px-2 swiper-body'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {
              data.map((value, index) => (
                <SwiperSlide key={index}><Card {...{ ...value, flag: 0 }} /></SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Body