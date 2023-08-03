import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import { HouseContext } from "./HouseContext";
import DateDropDown from "./DateDropDown";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg: top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg ">
      <CountryDropdown />
      <DateDropDown/>
      <PriceRangeDropdown />
      <PropertyDropdown />
      <button
        className="bg-violet-500 w-full lg:max-w-[162px] h-16 rounded-md flex justify-center items-center text-white font-semibold"
        onClick={() => handleClick()}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
