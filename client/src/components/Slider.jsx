import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
	return (
    <>
            <Swiper
            breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 2,
                },
                768: {
                  // width: 768,
                  slidesPerView: 1,
                },
              }}
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill h-auto m-auto"
                        src="https://cdn0.fahasa.com/media/magentothem/banner7/fhs_potico_840x320.png"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-auto m-auto"
                        src="/images/slider-2.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-auto m-auto"
                        src="/images/slider-1.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
	)
}
