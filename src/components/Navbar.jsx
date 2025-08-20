import React from "react";
import { useContext } from "react";
import { SearchContext } from "../contextApi/DoctorProvider";
import { useState } from "react";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
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
          <li className="flex items-center relative">
            <input
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
          </li>

          <li>
            <a href="#home" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#help" className="hover:text-yellow-300">
              Help
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
