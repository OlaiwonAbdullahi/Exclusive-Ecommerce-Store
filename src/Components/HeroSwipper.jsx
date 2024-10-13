import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Heroimg from "../assets/heroimg.png";
import HeroBanner from "../assets/heroBanner.png";
import HeroBanner1 from "../assets/heroBanner1.png";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function HeroSwipper() {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="w-full h-80"
      >
        <SwiperSlide className="flex items-center justify-center h-full rounded-lg">
          <img src={Heroimg} alt="" className=" h-full rounded-md" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center  h-full">
          <img src={HeroBanner} alt="" className=" h-full rounded-md" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center h-full">
          <img src={HeroBanner1} alt="" className=" h-full rounded-md" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Swiper Pagination Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #3490dc;
        }
        .swiper-pagination-bullet-active {
          background-color: #db4444;
          height: 10px;
          width: 10px;
        }
      `}</style>
    </div>
  );
}
