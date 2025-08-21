import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [chambers, setChambers] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = (input) => {
    setLoading(true);
    try {
      fetch("http://localhost:3000/doctor")
        .then((response) => response.json())
        .then((response) => {
          
          
          if(input===""){
            setSearchResults(response)
          }else{
            const result = response.filter(emp =>
              Object.values(emp).some(value =>
                String(value).toLowerCase().includes(input.toLowerCase())
              )
            );
    
            console.log("Search",result);
            setSearchResults(result)
          } 
        });
    } catch (error) {
      console.log("Exception Occured");
      setSearchResults([])
    }
    finally{
        setLoading(false)
    }
  };
  const fetchChambers = (input) => {
    setLoading(true);
    try {
      fetch("http://localhost:3000/chambers")
        .then((response) => response.json())
        .then((response) => {
          
          
          if(input===""){
            setChambers(response)
          }else{
            const result = response.filter(emp =>
              Object.values(emp).some(value =>
                String(value).toLowerCase().includes(input.toLowerCase())
              )
            );
    
            console.log("Search",result);
            setChambers(result)
          } 
        });
    } catch (error) {
      console.log("Exception Occured");
      setChambers([])
    }
    finally{
        setLoading(false)
    }
  };



  return (
    <SearchContext.Provider
      value={{ searchQuery,searchResults,chambers,fetchChambers, setSearchQuery,fetchData,loading }}
    >
      {children }
    </SearchContext.Provider>
  );
};
