import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { SearchContext } from '../../contextApi/DoctorProvider';
import { IoIosArrowBack } from 'react-icons/io';

const ChamberDetails = () => {
  const {id}=useParams();
  console.log(id)
  const {chambers,fetchChambers}=useContext(SearchContext)
  const [selectedChamber,setSelectedChamber]=useState([]);
  const navigate=useNavigate()
useEffect(()=>{
  fetchChambers("")
},[])
  useEffect(() => {
    console.log(chambers,"jndj")
    if(chambers && chambers.length>0){

      const chamber = chambers.find((cham) => cham.id === parseInt(id));
      setSelectedChamber(chamber);
    }
}, [id,chambers]);

  console.log(chambers.find((cham)=>cham.id===7),selectedChamber)
  return (
    <>
    <button
            onClick={() => navigate("/chamber")}
            className="bg-blue-600 text-white px-2 m-4 py-2 rounded hover:bg-blue-700"
            >
            <IoIosArrowBack />
          </button>
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
              src={selectedChamber?.photo}
              alt={selectedChamber?.name}
              />
          </div>
          <div className="ml-4 mt-8">

        <h2><strong>Name:</strong> {selectedChamber?.name}</h2>
        <p>
          <strong>Address: </strong> {selectedChamber?.location?.address}, 
          {selectedChamber?.location?.city}, {selectedChamber?.location?.city},
            {selectedChamber?.location?.state}, {selectedChamber?.location?.postalCode}
        </p>
        <p>
          <strong>Contact: </strong> {selectedChamber?.contact?.phone}
        </p>
        <p>
          <strong>Email: </strong> {selectedChamber?.contact?.email}
        </p>
        <p>
          <strong>Specialization: </strong> {selectedChamber?.specialization}
        </p>
        <p>
          <strong>Established: </strong> {selectedChamber?.establishedYear}
        </p>
          </div>
              </div>
      </div>
    </div>
              </>
  )
}

export default ChamberDetails