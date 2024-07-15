import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

import { BsBell } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const NavbarLogin = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-lg p-4 w-full">
      <div className="flex items-center">
        <BsBell className="text-gray-700 text-xl mr-4" />
        <CiShoppingCart className="text-gray-700 text-2xl mr-4" />
        <FiUser className="text-gray-700 text-xl" />
      </div>
      <div className="flex items-center">
        <IoSearchOutline className="text-gray-700 text-xl mr-4" />
        <input
          type="text"
          placeholder="ابحث عن شيء..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default NavbarLogin;
