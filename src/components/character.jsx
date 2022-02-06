import React, { useState, useEffect } from "react";
import Card from "./card";

const Character = () => {

  const [info, setInfo] = useState([]); 
  const [value, setValue] = useState('');
  

  useEffect(() => {
    getCharacter();
  }, [])

  const getCharacter = async () => {
    const url = 'https://www.breakingbadapi.com/api/characters';
    const resp = await fetch(url);
    const data = await resp.json(); 

    console.log(data);
    setInfo(data);
  };

  const handleChange = (e) => {
        setValue(e.target.value)
  }
  
  const filterNames = info.filter(person => {
        return person.name.toLowerCase().includes(value.toLowerCase())
  })
  
  return (
    <section>
      <input
        type = 'texte'        
        onChange = {handleChange}
        value={value}
        placeholder='Search'
        className ="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      
      <ul className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-px xl:-mx-1">       
          <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-px md:px-px md:w-full lg:my-px lg:px-px xl:my-1 xl:px-1 xl:w-1/5">
            {filterNames.map(Character => <Card key={ Character.char_id } {...Character} />)}        
          </div>
      </ul>     

    </section>

  );
};

export default Character;