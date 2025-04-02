import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import mockData from "../../mock/mockData.json";
import { CardItem } from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export const Carousel = () => {
  return (
    <div className="my-5">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="text-xl md:text-2xl font-bold">Productos</h2>
        <a href="/productos" className="text-blue-600 hover:underline">
          Ver más
        </a>
      </div>
      <div className="px-8">
        <Swiper
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
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
      </div>
    </div>
  );
};