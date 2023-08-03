import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="px-2 font-bold">
          Estatery
        </Link>

        <div className="container mx-auto flex justify-start items-center">
          <button className="px-3 w-20 h-10 bg-violet-200 rounded-md  text-violet-500 font-semibold">Rent</button>
          <button className="px-3 w-20 h-10  text-black font-semibold">Buy</button>
          <button className="px-3 w-20 h-10  text-black font-semibold">Sell</button>
          <button className="px-3 w-50 h-10  text-black font-semibold">Manage Property</button>
          <button className="px-3 w-20 h-10  text-black font-semibold">Resources</button>
        </div>

        <div className="flex items-center gap-6">
          <button className="w-20 h-10 border-2 bg-neutral-200 rounded-md text-violet-500 font-semibold">
            Log in
          </button>
          <button className="w-20 h-10 bg-violet-500 rounded-md flex justify-center items-center text-white font-semibold">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
