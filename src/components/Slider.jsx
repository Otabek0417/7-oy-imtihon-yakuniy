import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Slider() {
  return (
   <div className="bg-[#021431] cursor-pointer px-4 py-4 mt-16 rounded-xl">
     <Swiper
      spaceBetween={10}
      slidesPerView={1.5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className="w-[400px] h-[400px] rounded-xl" src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-[400px] h-[400px] rounded-xl" src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-[400px] h-[400px] rounded-xl" src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-[400px] h-[400px] rounded-xl" src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp" alt="" /></SwiperSlide>
     
    </Swiper>
   </div>
  );
}

export default Slider;
