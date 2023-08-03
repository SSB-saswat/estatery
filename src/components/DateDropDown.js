import React, { useState, useContext } from "react";
import { Menu } from "@headlessui/react";
import DatePicker from "react-date-picker";

import { HouseContext } from "./HouseContext";

const DateDropDown = () => {
  const { date, setDate } = useContext(HouseContext);
  const [dateValue, onDateChange] = useState(new Date());

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown-btn w-full text-left">
        <div>
          <div className="text-[13px]">Date</div>
          <div className="text-[15px] font-medium leading-light">{date}</div>
        </div>
      </Menu.Button>
      <Menu.Items className="dropdown-menu absolute z-10 bg-white shadow-md p-4"></Menu.Items>
    </Menu>
  );
};

export default DateDropDown;




