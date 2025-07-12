import React from "react";
import "./HomeSlider.scss";
// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import HomeSlide from "./HomeSlide";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// install Swiper components
SwiperCore.use([Pagination, Autoplay]);

function HomeSlider() {
  return (
    <div className="homeslider">
      <Swiper
        className="homeslider__swipe"
        loop="true"
        autoplay="false"
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={100}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="slide">
          <HomeSlide
            image="./Images/HomeSlider/HomeSlider1.png"
            title="Johanna Engels / Burg Heimerzheim"
            paragraph="When we expanded our room capacity from 7 to 2, 3 years ago, a Channel Manager was an absolute necessity. With TripGeni, we immediately found a reliable partner who was very helpful in the initial phase and who has always been there for us quickly and competently to this day."
            linktext="www.burg-heimerzheim.de"
            link="https://www.burg-heimerzheim.de"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <HomeSlide
            image="./Images/HomeSlider/HomeSlider2.png"
            title="Alexander Sego / Seehotel Luitpold"
            paragraph="We can rely on TripGeni. Apart from quality, it’s the personal attention in service that we appreciate the most. Our account manager is always there for us to help reduce the obstacles in the online distribution jungle."
            linktext="www.seehotel-luitpold.de"
            link="https://www.seehotel-luitpold.de"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <HomeSlide
            image="./Images/HomeSlider/HomeSlider3.png"
            title="Dirk Wittig / Hotel-Restaurant Tum Stüürmann"
            paragraph="We became on first-name basis immediately and I feel well taken care of. In all matters I get instant help beyond the initial enquiry."
            linktext="www.hotel-stuermann.de"
            link="https://www.hotel-stuermann.de"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <HomeSlide
            image="./Images/HomeSlider/HomeSlider4.png"
            title="Andre Ricken / Troll's Brauhaus & Hotel"
            paragraph="We can rely on TripGeni. Apart from quality, it’s the personal attention in service that we appreciate the most. Our account manager is always there for us to help reduce the obstacles in the online distribution jungle."
            linktext="www.trolls-brauhaushotel.de"
            link="https://www.trolls-brauhaushotel.de"
          />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <HomeSlide
            image="./Images/HomeSlider/HomeSlider5.png"
            title="Sibylle Lauterbach / Art Hotel Lauterbach"
            paragraph="After years of using the Channel Manager TripGeni and the booking mask TripGenibooking Neo, I can only say how extremely satisfied we are with both. In this way, the administrative effort for maintaining the online portals has been reduced to a minimum and the danger of overbooking has almost been eliminated. TripGeni employees always load the installments and maintain the system without any problems. And if a problem does occur, you get immediate help.  We can fully recommend both."
            linktext="www.art-hotel-kl.de"
            link="https://www.art-hotel-kl.de"
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}

export default HomeSlider;
