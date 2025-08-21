import React, { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { CgUnavailable } from "react-icons/cg";
import Modal from "./Modal";
import { useContext } from "react";
import { SearchContext } from "../contextApi/DoctorProvider.jsx";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
const Card = () => {
  const [doctors, setDoctors] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { searchResults, setSearchResults, loading, chambers, fetchData } = useContext(SearchContext)
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    let sorted = [...searchResults];
    if(sortBy==="select"){
      setSearchResults(sorted)
    }
    else if (sortBy === "nameAZ") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "nameZA") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (sortBy == "roleAZ") {
      sorted.sort((a, b) => a.specialization.localeCompare(b.specialization))
    }
    else if (sortBy == "roleZA") {
      sorted.sort((a, b) => b.specialization.localeCompare(a.specialization))
    }
    else if (sortBy == "statusOn") {
      sorted.sort((a, b) => { return (a.available === b.available) ? 0 : a.available ? -1 : 1; })
    }
    else if (sortBy == "statusOff") {
      sorted.sort((a, b) => { return (a.available === b.available) ? 0 : a.available ? 1 : -1; })
    }
    setSearchResults(sorted)
  }, [sortBy])

  useEffect(() => {
    fetchData(input)
  }, [input])

  return (
    <>
      {loading && <p>Loading...</p>}
      {
        !loading &&
        <>


          <div className="flex items-center m-4">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-2 mr-4 py-2 rounded hover:bg-blue-700"
            >
              <IoIosArrowBack />
            </button>
            <input
              type="text"
              className="border-2 text-black border-black rounded-sm pr-10 pl-2 py-1 mr-4"
              name="search"
              placeholder="Search Doctors"
              onChange={(e) => setInput(e.target.value)}
              id="s"
            />
            <span>Sort By:</span>
            <select onChange={(e) => setSortBy(e.target.value)} className="rounded-sm border-2 ml-2" name="sort" id="sort">
              <option value="select">select</option>
              <option value="nameAZ">Name A-Z</option>
              <option value="nameZA">Name Z-A</option>
              <option value="roleAZ">Role A-Z</option>
              <option value="roleZA">Role Z-A</option>
              <option value="statusOn">Available</option>
              <option value="statusOff">Unavailable</option>
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
                      onClick={() => navigate(`/doctor-details/${doc.id}`)}
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
