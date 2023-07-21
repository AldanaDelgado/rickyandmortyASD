import { useState } from "react";
import style from "./SearchBar.css";

export default function SearchBar({onSearch}) {
   const [id ,setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)

   }
   return (
      <div className={style["search-bar"]}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
