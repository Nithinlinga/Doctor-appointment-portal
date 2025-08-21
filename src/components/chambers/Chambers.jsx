import React, { useContext, useEffect } from 'react'
import { SearchContext } from '../../contextApi/DoctorProvider'
import { useNavigate } from 'react-router-dom'

const Chambers = () => {
    const navigate=useNavigate();
    const {searchResults,loading,chambers,fetchChambers}=useContext(SearchContext)
    useEffect(()=>{
       fetchChambers("")
    },[])
    // console.log(chambers)
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
      {chambers?.map((cham,i) => (
        <div className="border-2 rounded-xl h-[120px]" key={cham.id}>
          {/* <div className="w-full h-[300px] overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={cham.photo}
              alt={cham.name}
              />
          </div> */}

          <div className="p-4 ">
            <h3 className="text-xl font-semibold text-center text-gray-800">{cham.name}</h3>
            
            <div className="w-full flex justify-center">
              <button
                onClick={()=>navigate(`/chamber-details/${cham.id}`)}
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
  )
}

export default Chambers