import { FaCartShopping } from "react-icons/fa6";

export const CardItem = ({
  imageUrl,
  title,
  description,
  price,
  actionIcon = <FaCartShopping className="text-blue-600" />, // Icon or action element (e.g., cart icon)
  containerClassName = "rounded-lg shadow-lg w-full flex flex-col cursor-pointer h-72 border border-gray-300",
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
        <img
          src={imageUrl}
          alt={title || "Card item"}
          className={imageClassName}
        />
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

/*
Example usage prop renderFooter
renderFooter={() => (
  <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
    Register Now
  </button>
)}

Example usage prop onClick
 onClick={() => navigate(`/product/123`)} // Navigate to product page on card click
      renderFooter={({ price, actionIcon }) => (
        <div className="flex justify-between items-center">
          <p className="font-semibold text-black">{price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card's onClick from firing
              alert("Added to cart!");
            }}
            className="text-blue-600"
          >
            {actionIcon}
          </button>
*/
