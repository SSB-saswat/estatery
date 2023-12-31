import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

import { HouseContext } from "./HouseContext";
import House from "./House";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // console.log(houses);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  if (houses.length < 1) {
    return <div className="text-center text-slate-700 mt-36">No results found</div>;
  }

  return (
    <section className="mb-20 mt-10">
      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {houses.map((house, index) => {
            return (
              // <Link to={`/property/${house.id}`} key={index}>
              //   <House house={house} />
              // </Link>
              <Link to="/" key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
