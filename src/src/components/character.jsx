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
  }, [])

  useEffect(() => {
    if (concatenate) {
      const array = []
      for (let x = 0; x < info.length; x++) {
        let array2 = []
        for (let y = 0; y < quotes.length; y++) {
          if (quotes[y].author == info[x].name) {
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
  }, [concatenate, info, quotes])

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
    <section>
      <input
        type='texte'
        onChange={handleChange}
        value={value}
        placeholder='Search'
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />

      <ul className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-px xl:-mx-1">
        <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-px md:px-px md:w-full lg:my-px lg:px-px xl:my-1 xl:px-1 xl:w-1/5">
          {filterNames.map(Character => <Card key={Character.char_id} {...Character} />)}
        </div>
      </ul>

    </section>

  );
};

export default Character;