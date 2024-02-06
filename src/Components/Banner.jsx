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
        <img
          src="https://xplorenetbd.com/uploads/sliders/background/ZSb47ItorSCnUxWVy2Rnwbkl9G4zERe34x5qy4lZ.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://xplorenetbd.com/uploads/sliders/background/8RDeY7Rca2uSgYE3wqTzs0qfwnX6zKn6KMWJu7Hh.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://xplorenetbd.com/uploads/sliders/background/xQ53fkYxnnVdlRGeuc7vgl9vVaoZGyimZGVPn5au.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
