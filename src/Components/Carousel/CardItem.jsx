import { FaCartShopping } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";




export const CardItem = ({
  imageUrl,
  title,
  description,
  price,
  actionIcon = <FaCartShopping className="text-blue-600" />, // Icon or action element (e.g., cart icon)
  containerClassName = "rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full flex flex-col cursor-pointer h-72 ",
  imageClassName = "w-full h-36 object-cover object-center rounded-t-lg",
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
      {imageUrl && (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imageUrl} alt="" />
        </SwiperSlide>
        

       
      </Swiper>
      )}
      <div className={contentClassName}>
        {title && <h3 className={titleClassName}>{title}</h3>}
        {description && <p className={descriptionClassName}>{description}</p>}
        {renderFooter
          ? renderFooter({ price, actionIcon })
          : (price || actionIcon) && (
              <div className={footerClassName}>
                {price && <p className={priceClassName}>{price}</p>}
                {actionIcon}
              </div>
            )}
      </div>
    </div>
  );
};

