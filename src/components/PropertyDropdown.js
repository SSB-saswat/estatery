import React, { useState, useEffect, useContext } from "react";
import { Menu } from "@headlessui/react";
// import { RiArrowUpSline, RiArrowDownSLine } from "react-icons/ri";

import { HouseContext } from "./HouseContext";

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  // console.log(properties);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Property Type</div>
          <div className="text-[15px] font-medium leading-light">
            {property}
          </div>
        </div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="crsor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
