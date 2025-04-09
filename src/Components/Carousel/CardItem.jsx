import { FaCartShopping } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export const CardItem = ({
  imageUrl, // este será el objeto { imageUrl: [...] }
  title,
  description,
  price,
  actionIcon = <FaCartShopping className="text-blue-600" />,
  containerClassName = "rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full flex flex-col cursor-pointer h-80",
  contentClassName = "p-2 flex-grow flex flex-col justify-around",
  titleClassName = "text-sm md:text-lg font-bold",
  descriptionClassName = "text-sm md:text-base",
  footerClassName = "flex justify-between items-center text-sm md:text-lg",
  priceClassName = "font-semibold text-blue-800",
  renderFooter,
  onClick,
}) => {
  return (
    <div className={containerClassName} onClick={onClick}>
      {imageUrl?.imageUrl?.length > 0 && (
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-40"
        >
          {imageUrl.imageUrl.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={url}
                alt={`Imagen ${idx}`}
                className="w-full h-40 object-cover object-center rounded-t-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className={contentClassName}>
        {title && <h3 className={titleClassName}>{title}</h3>}
        {description && <p className={descriptionClassName}>{description}</p>}
        {renderFooter ? (
          renderFooter({ price, actionIcon })
        ) : (
          <div className={footerClassName}>
            {price && <p className={priceClassName}>{price}</p>}
            {actionIcon}
          </div>
        )}
      </div>
    </div>
  );
};
