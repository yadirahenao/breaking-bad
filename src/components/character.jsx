import React, { useState, useEffect } from "react";
import { getCharacters, getQuotes } from "../services/getCharacter";
import Card from "./card";

const Character = () => {

  const [info, setInfo] = useState([]);
  const [value, setValue] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [concatenate, setConcatenate] = useState(false);
  const [load, setLoad] = useState(true);
  const [characters, setCharacters] = useState([]);

  // Llamado de personajes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const dataCha = await getCharacters()
    setInfo(dataCha)
    const dataQuo = await getQuotes()
    setQuotes(dataQuo)
    setConcatenate(true)
  }, []);

  useEffect(() => {
    if (concatenate) {
      const array = []
      for (let x = 0; x < info.length; x++) {
        let array2 = []
        for (let y = 0; y < quotes.length; y++) {
          if (quotes[y].author === info[x].name) {
            array2.push(quotes[y].quote)
          }
        }
        array.push(array2)
      }
      const character = info.filter((oneCharacter, Index) => {
        oneCharacter.quotes = array[Index]
        return (
          oneCharacter
        )
      })

      setCharacters(character)
      setLoad(false)

    }
  }, [concatenate, info, quotes]);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const filterNames = characters.filter(person => {
    return person.name.toLowerCase().includes(value.toLowerCase())
  })

  if (load) {
    return (<p>cargando</p>)
  }
  return (
    <section className="border-black">
      <ul className="border-black">
        <li className="flex flex-wrap justify-center bg-black border-black">
          <input
            type='texte'
            onChange={handleChange}
            value={value}
            placeholder='Search for a character'
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-3"
          />
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 border-black bg-black h-1/5">
           {filterNames.map(Character => <Card key={Character.char_id} {...Character} />)}
        </li>
      </ul>
    </section>

  );
};

export default Character;