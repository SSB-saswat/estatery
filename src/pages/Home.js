import React from "react";

import Search from "../components/Search";
import HouseList from "../components/HouseList";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <h1 className="w-3/5 text-center font-bold text-4xl">
          Search properties to rent
        </h1>
        <select className="px-2 mb-12 rounded-md text-slate-500">
          <option value="2022">Search with SearchBar</option>
        </select>
      </div>
      <Search />
      <HouseList />
    </div>
  );
};

export default Home;
