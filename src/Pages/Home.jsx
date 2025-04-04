import React from "react";
import Moda from "../Components/Moda";
import { Carousel } from "../Components/Carousel/Carousel";
import mockData from "../mock/mockData.json";
import { CardItem } from "../Components/Carousel/CardItem";
import { FaCartShopping } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Moda />
      {/* Carousel Productos */}
      <Carousel
      swiperClassName="px-4 md:px-8"
      containerClassName="my-20 p-2"
        data={mockData}
        renderItem={(item) => (
          <CardItem
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            cartIcon={<FaCartShopping className="text-blue-600" />}
          />
        )}
      />
      {/* Carousel Productos */}
      {/* Carousel Moda */}
      <Carousel
        containerClassName="my-20 p-2"
        swiperClassName="px-4 md:px-8"
        title="Moda"
        linkText="Ver más"
        linkUrl="/moda"
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        data={mockData}
        renderItem={(item) => (
          <CardItem
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            price={item.price}
            cartIcon={<FaCartShopping className="text-blue-600" />}
            containerClassName="flex shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg cursor-pointer"
            imageClassName="w-32 h-32 object-cover object-center rounded-l-lg"
            contentClassName="p-2 flex-grow flex flex-col justify-between"
            descriptionClassName="text-xs md:text-base text-gray-700"
          />
        )}
      />
      {/* Carousel Moda */}
    </div>
  );
};

export default Home;
