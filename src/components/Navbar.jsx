import React from "react";
import { useContext } from "react";
import { SearchContext } from "../contextApi/DoctorProvider";
import { useState } from "react";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { fetchData, searchQuery } = useContext(SearchContext);
  const [input, setInput] = useState("");
  const [showIcon, setShowIcon] = useState(true);

  const handleIconClick = () => {
    setShowIcon(!showIcon);
    // Trigger your search logic here if needed
  };

  useEffect(() => {
    fetchData(input);
  }, [input]);
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Doctor Appointment Portal</h1>
        <ul className="flex space-x-6">
          {/* <li className="flex items-center relative"> */}
            {/* <input
              type="text"
              className="border-2 text-white border-amber-50 rounded-sm pr-10 pl-2 py-1"
              name="search"
              onClick={handleIconClick}
              onBlur={handleIconClick}
              onChange={(e) => setInput(e.target.value)}
              id="s"
            />
            {showIcon && (
              <IoSearch
                className="absolute right-2 text-white cursor-pointer"
                size={25}
                // onClick={handleIconClick}
              />
            )}
          </li> */}

          <li>
            <NavLink to={"/"} className="hover:text-yellow-300">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/chamber"} className="hover:text-yellow-300">
              Chambers
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="hover:text-yellow-300">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}  className="hover:text-yellow-300">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/help"} className="hover:text-yellow-300">
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
