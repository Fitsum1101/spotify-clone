import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  FreeMode
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swipers = () => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={15}
      freeMode
      centeredSlides
      centeredSlidesBounds
      modules={[FreeMode]}
      className="mt-4"
    >
      <div className="w-[20rem] h-50% m-auto">
        <SwiperSlide className="text-xl w-10 h-10 bg-red-500">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="text-xl  w-10 h-10 bg-yellow-500">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="text-xl  w-10 h-10 bg-green-500">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="text-xl  w-10 h-10 bg-gray-500">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="text-xl  w-10 h-10 bg-pink-500">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="text-xl  w-10 h-10 bg-orange-500">
          Slide 6
        </SwiperSlide>
      </div>
      ...
    </Swiper>
  );
};

export default Swipers;
