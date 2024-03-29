import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      keyboard={true}
      modules={[Autoplay, EffectFade, Navigation, Pagination, Keyboard]}
      className=""
    >
      <SwiperSlide>
        <img className="h-[90%]" src="./img/banner1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[90%]" src="./img/banner1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-[90%]" src="./img/banner1.jpg" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
