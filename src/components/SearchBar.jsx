import React, { useState } from "react";
import Estilo from "./SearchBar.module.css";




export default function SearchBar({onSearch}) {
  const[city, setCity] = useState("");
  return (
    <div className = {Estilo.searchBar}>  
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city); 
      setCity("");
    }}> 
      <input 
        className={Estilo.input}
        type="text" 
        placeholder="Ciudad..."
        value = {city}
        onChange = {e => setCity(e.target.value)}

      />
      <input
      value= "+"
      type="submit" 
      className={Estilo.search} 
      />
 
    </form>
    </div> 
    
  );
}

