import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../../contextApi/DoctorProvider'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io';

const Chambers = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [sortBy, setSortBy] = useState("");
    const { searchResults, loading, chambers, setChambers, fetchChambers } = useContext(SearchContext)
    useEffect(() => {
        fetchChambers(input)
    }, [input])
    useEffect(() => {

        let sorted =[...chambers];
        if (sortBy === "nameAZ") {
            sorted.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "nameZA") {
            sorted.sort((a, b) => b.name.localeCompare(a.name));
        } 
        setChambers(sorted)
    }, [sortBy])
    // console.log(chambers)
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
                            <option value="">select</option>
                            <option value="nameAZ">Name A-Z</option>
                            <option value="nameZA">Name Z-A</option>
                        </select>
                    </div>
                    <div className=" grid grid-cols-4 gap-4 m-4">
                        {chambers?.map((cham, i) => (
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
                                            onClick={() => navigate(`/chamber-details/${cham.id}`)}
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