import React from 'react';
import { useSwiper } from 'swiper/react';
import { BiSolidChevronsLeft } from "react-icons/bi";
import { BiSolidChevronsRight } from "react-icons/bi";
import { color } from 'framer-motion';


export const LeftSwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button className="button-up" onClick={() => swiper.slidePrev()}> <BiSolidChevronsLeft size={65} color='#fa6007'/>  </button>
    </div>

)};



export const RightSwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button className="button-down" onClick={() => swiper.slideNext()}> <BiSolidChevronsRight size={65} color='#fa6007'/>  </button>
    </div>
  
)};