import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    price,
    name,
  } = house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img src={image} alt="image" className="mb-8" />
      <div className="text-lg font-semibold text-violet-500 mb-1">
        ${price}
        <span className="text-sm font-normal text-slate-500 ">/month</span>
      </div>
      <div className="text-lg font-semibold max-w-[260px]">{name}</div>
      <div className="text-sm font-normal text-slate-500 ">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] text-violet-400">
            <BiBed />
          </div>
          <div>{bedrooms} Beds</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] text-violet-400">
            <BiBath />
          </div>
          <div>{bathrooms} Bathrooms</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div className="text-[20px] text-violet-400">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
