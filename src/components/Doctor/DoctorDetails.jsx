import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchContext } from '../../contextApi/DoctorProvider';

const DoctorDetails = () => {
  const {id}=useParams();
  const {searchResults,loading,fetchData}=useContext(SearchContext)
  const [selectedDoctor,setSelectedDoctor]=useState([]);

  useEffect(() => {
  const doctor = searchResults.find((doc) => doc.id === id);
  setSelectedDoctor(doctor);
}, [id, searchResults]);

  console.log(searchResults,selectedDoctor)
  return (
    <div
      className="fixed bg-opacity-60 flex justify-center items-center "
 
    >
      <div
        className="bg-white p-8 flex justify-center items-center rounded-lg w-[90vw] max-w-[800px] max-h-[90vh] overflow-y-auto relative animate-fadeIn"
        
      >
        <div className=" flex">
            
        <div className=" h-[300px] overflow-hidden">
            <img
              className=" h-full object-cover"
              src={selectedDoctor?.photo}
              alt={selectedDoctor?.name}
              />
          </div>
          <div className="ml-4 mt-8">

        <h2><strong>Name:</strong> {selectedDoctor?.name}</h2>
        <p>
          <strong>Speciality: </strong> {selectedDoctor?.specialization}
        </p>
        <p>
          <strong>Hospital: </strong> {selectedDoctor?.hospital}
        </p>
        <p>
          <strong>Phone: </strong> {selectedDoctor?.contact}
        </p>
        <p>
          <strong>Email: </strong> {selectedDoctor?.email}
        </p>
        <p>
          <strong>Days Visited: </strong> {selectedDoctor?.dayVisited}
        </p>
          </div>
              </div>
      </div>
    </div>
  )
}

export default DoctorDetails