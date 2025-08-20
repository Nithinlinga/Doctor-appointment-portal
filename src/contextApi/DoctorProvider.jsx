import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
            setSearchResults(response.filter(res=>res.name.toLowerCase().includes(input)))
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

  return (
    <SearchContext.Provider
      value={{ searchQuery,searchResults, setSearchQuery,fetchData,loading }}
    >
      {children }
    </SearchContext.Provider>
  );
};
