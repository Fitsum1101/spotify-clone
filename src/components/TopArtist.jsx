import { image } from "../assets";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

const TopArtist = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mx-2">
        <h3 className="text-white text-xl capitalize font-bold">Top Artists</h3>
        <Link className="text-gray-300" to={"/top-artists"}>
          see more
        </Link>
      </div>
      <div className="mt-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="max-w-[20rem]"
          style={{paddingLeft:"1rem"}}
        >
          <SwiperSlide style={{ width: "30%", heigh: "auto" }}>
            <Link>
              <img
                src={image}
                className=" rounded-full w-full object-cover"
                alt="my image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "30%", heigh: "auto" }}>
            <Link>
              <img
                className=" rounded-full w-full object-cover"
                src={image}
                alt="my image"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide style={{ width: "30%", heigh: "auto" }}>
            <Link>
              <img
                className=" rounded-full w-full object-cover"
                src={image}
                alt="my image"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopArtist;
