import React, { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { CgUnavailable } from "react-icons/cg";
import Modal from "./Modal";
import { useContext } from "react";
import { SearchContext } from "../contextApi/DoctorProvider.jsx";
import {useNavigate} from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
const Card = () => {
  const [doctors, setDoctors] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const {searchResults,loading,chambers,fetchData}=useContext(SearchContext)
  const navigate=useNavigate()
  const [showIcon, setShowIcon] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:3000/doctor")
  //     .then((response) => response.json())
  //     .then((response) => {setDoctors(response)

  //             const allChambers = response
  //             .flatMap(doctor => doctor.chambers) // Flatten all chambers into one array
  //             .filter(Boolean); // Remove any undefined/null values

  //           const uniqueChambers = [...new Set(allChambers)];

  //           console.log("Search", uniqueChambers);
  //     })
  //     .catch((error) => console.log(error));

  //   }, []);

    console.log(chambers,"ij")
  return (
    <>
    {loading && <p>Loading...</p> }
    {
      !loading &&
      <>
      <div className="flex items-center m-4">
            <input
              type="text"
              className="border-2 text-black border-black rounded-sm pr-10 pl-2 py-1 mr-4"
              name="search"
              placeholder="Search Doctors"
              // onClick={handleIconClick}
              // onBlur={handleIconClick}
              // onChange={(e) => setInput(e.target.value)}
              id="s"
            />
            <span>Sort By:</span>
            <select className="rounded-sm border-2 ml-2" name="sort" id="sort">
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
    <div className=" grid grid-cols-4 gap-4 m-4">
      {searchResults?.map((doc) => (
        <div className="border-2 rounded-xl h-[450px]" key={doc.id}>
          <div className="w-full h-[300px] overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={doc.photo}
              alt={doc.name}
              />
          </div>

          <div className="p-4 ">
            <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{doc.specialization}</p>

            <p className="text-sm text-gray-600 mt-1 flex">
              {" "}
              <span className="mr-2">Status:</span>{" "}
              {doc.available ? (
                <SiTicktick size={20} color="green" />
              ) : (
                <CgUnavailable size={20} color="red" />
              )}
            </p>

            {/* <p className="text-sm text-gray-600 mt-1">{doc.contact}</p>
            <p className="text-sm text-gray-600 mt-1">{doc.email}</p> */}
            <div className="w-full flex justify-center">
              <button
                onClick={()=>navigate(`/doctor-details/${doc.id}`)}
                className=" bg-green-600 cursor-pointer text-amber-50 rounded-xl p-2 mt-2"
                >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
      </>
}
      </>
  );
};

export default Card;
