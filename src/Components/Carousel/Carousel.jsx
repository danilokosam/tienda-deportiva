import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export const Carousel = ({
  title = "Productos",
  linkText = "Ver más",
  linkUrl = "/productos",
  data = [],
  renderItem,
  breakpoints = {
    320: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 5, spaceBetween: 20 },
  },
  autoplay = { delay: 2500, disableOnInteraction: false },
  loop = true,
  containerClassName = "my-5",
  headerClassName = "flex justify-between items-center mb-4 px-4",
  swiperClassName = "px-8",
}) => {
  return (
    <div className={containerClassName}>
      <div className={headerClassName}>
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <a href={linkUrl} className="text-blue-600 hover:underline">
          {linkText}
        </a>
      </div>
      <div className={swiperClassName}>
        <Swiper
          loop={loop}
          breakpoints={breakpoints}
          autoplay={autoplay}
          modules={[Autoplay]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              {renderItem ? (
                renderItem(item)
              ) : (
                <div>{JSON.stringify(item)}</div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
