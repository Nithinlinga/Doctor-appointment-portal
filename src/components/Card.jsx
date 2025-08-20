import React, { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { CgUnavailable } from "react-icons/cg";
import Modal from "./Modal";
import { useContext } from "react";
import { SearchContext } from "../contextApi/DoctorProvider.jsx";
const Card = () => {
  const [doctors, setDoctors] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const {searchResults,loading}=useContext(SearchContext)

  useEffect(() => {
    fetch("http://localhost:3000/doctor")
      .then((response) => response.json())
      .then((response) => setDoctors(response))
      .catch((error) => console.log(error));
  }, []);
  const openModal = (doctor) => {
    setSelectedDoctor(doctor);
  };
  const closeModal = () => {
    setSelectedDoctor(null);
  };
  return (
    <>
    {loading && <p>Loading...</p> }
    {
      !loading &&

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
                onClick={()=>openModal(doc)}
                className=" bg-green-600 cursor-pointer text-amber-50 rounded-xl p-2 mt-2"
                >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
}
      <Modal selectedDoctor={selectedDoctor} onClose={closeModal} />
      </>
  );
};

export default Card;
