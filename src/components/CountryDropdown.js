import React, { useState, useEffect, useContext } from "react";
import { Menu } from "@headlessui/react";
// import { RiArrowUpSline, RiArrowDownSLine } from "react-icons/ri";

import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  // console.log(country);
  // console.log(countries);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
      >
        <div>
          <div className="text-[13px]">Location</div>
          <div className="text-[15px] font-medium leading-light">{country}</div>
        </div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              onClick={() => setCountry(country)}
              className="crsor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
