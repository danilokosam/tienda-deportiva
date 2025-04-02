import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import mockData from "../../mock/mockData.json";
import { CardItem } from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Carousel = () => {
  return (
    <Swiper
    //   spaceBetween={50}
      className="my-5"
      loop={true}
    //   slidesPerView={5}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 }, // 1 slide para teléfonos pequeños
        768: { slidesPerView: 3, spaceBetween: 40 }, // 2 slides para tabletas
        1024: { slidesPerView: 5, spaceBetween: 50 }, // 3 slides para pantallas de escritorio
      }}
    >
      {mockData.map((item) => (
        <SwiperSlide key={item.id}>
          <CardItem
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            cartIcon={<FaCartShopping className="text-blue-600" />}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
