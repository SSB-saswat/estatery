import React, { useState, useEffect, useContext } from "react";
import { Menu } from "@headlessui/react";

import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  // console.log(properties);

  const prices = [
    {
      value: "Price range",
    },
    {
      value: "500-$2500",
    },
    {
      value: "2500-$5000",
    },
    {
      value: "5000-$10000",
    },
    {
      value: "10000-$15000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Price</div>
          <div className="text-[15px] font-medium leading-light">{price}</div>
        </div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="crsor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              ${price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
