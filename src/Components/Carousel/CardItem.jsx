export const CardItem = ({ imageUrl, title, description, price, cartIcon }) => {
    return (
      <div className="rounded-lg shadow-lg w-full md:w-full flex flex-col cursor-pointer h-72 border border-gray-300">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-36 object-cover object-center rounded-t-lg"
        />
        <div className="p-2 flex-grow flex flex-col justify-around">
          <h3 className="text-sm md:text-lg font-bold">{title}</h3>
          <p className="text-sm md:text-base">{description}</p>
          <div className="flex justify-between items-center text-sm md:text-lg">
            <p className="font-semibold text-blue-800">{price}</p>
            {cartIcon}
          </div>
        </div>
      </div>
    );
  };