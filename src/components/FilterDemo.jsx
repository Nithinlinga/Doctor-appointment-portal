import React, { useEffect, useState } from 'react'

const FilterDemo = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);
    
      useEffect(() => {
        fetch("http://localhost:3000/doctor")
          .then((response) => response.json())
          .then((response) => {setDoctors(response),setFilteredDoctors(response)})
          .catch((error) => console.log(error));
          console.log(doctors)
      }, []);
    const searchFunction=()=>{
        if(searchItem===''){
            setFilteredDoctors(doctors)
        }else{
            setFilteredDoctors(doctors.filter(doc=>doc.name.toLowerCase().includes(searchItem)))
        }
    }
    useEffect(()=>{
        searchFunction()
    },[searchItem])
  return (
    <>
    <span>Search Doctor</span>
        <input type="text" className='border-1 m-4' onChange={(e)=>{setSearchItem(e.target.value)}} name="search" id="hi" />
        <button className='border-2 rounded-sm' onClick={searchFunction}>Search</button>
    <div className='m-4'>

        {filteredDoctors?.map((doctor,i)=>{
            return <>
            <p>{i}</p>
            <p>{doctor.name}</p>
            <p>{doctor.specialization}</p>
            </>
        })}
        </div>
    </>
  )
}

export default FilterDemo