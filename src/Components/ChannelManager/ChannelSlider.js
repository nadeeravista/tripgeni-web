import React from "react";
import "./ChannelSlider.scss";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper components
SwiperCore.use([Pagination, Autoplay]);

export function ChannelSlider({ slides }) {
  return (
    <div className="channelslider">
      <Swiper
        className="channelslider__swipe"
        loop="true"
        autoplay="false"
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="channelslide">
          <img src={slides[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[4]} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export function ChannelSliderMobile({ slides }) {
  return (
    <div className="channelslider">
      <Swiper
        className="channelslider__swipe"
        loop="true"
        autoplay="false"
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="channelslide">
          <img src={slides[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide className="channelslide">
          <img src={slides[4]} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
