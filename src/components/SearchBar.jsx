import { useState } from "react";

export default function SearchBar({ onSearch }) {
   const [id, setID] = useState("")

   const handleChange = (event) => {
      setID(event.target.value)
   }

   return (
      <div className="searchBar">
         <input type='search' placeholder="Ingrese un id" onChange={handleChange} value={id} />
         <button onClick={() => onSearch(id)} onChange={handleChange}>
            <span>Agregar</span>
         </button>
         <button onClick={() => onSearch(Math.floor(Math.random() * 826))}>
            <span>Random</span>
         </button>
      </div>
   );
}
