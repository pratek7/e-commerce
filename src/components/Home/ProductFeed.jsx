import React from "react";

const ProducrCard = ({ title, price, category, description, image }) => {
  return (
    <div className=" hover:transform  rounded-xl flex justify-center items-center flex-col bg-white  m-5 p-4">
      <div className="m-4 w-32 ">
        <img className="w-full hover:scale-75 transform" src={image} alt="" />
      </div>
      <div className="">
        <p className="">{title}</p>
        <h1 className="font-bold">${price}</h1>
        <h2 className="text-sm">{category}</h2>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
      <div className="flex w-full border justify-between mt-4 ">
        <p className="p-4 cursor-pointer rounded-lg bg-gray-500">Add to cart</p>
        <p className="p-4 cursor-pointer rounded-lg bg-orange-500">Buy now</p>
      </div>
    </div>
  );
};
const ProductFeed = ({ filterProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {filterProduct.map((product) => (
        <ProducrCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductFeed;
