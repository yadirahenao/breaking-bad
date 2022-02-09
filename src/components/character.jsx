import React, { useState, useEffect } from "react";
import { getCharacters, getQuotes } from "../services/getCharacter";
import Card from "./card";
import ButtonLoading from "./buttonLoading";
import Pagination from "./pagination";

const Character = () => {

  const [info, setInfo] = useState([]);
  const [value, setValue] = useState('');
  const [quotes, setQuotes] = useState([]);
  const [concatenate, setConcatenate] = useState(false);
  const [load, setLoad] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [filterNames, setFilterNames] = useState([]);

  // Llamado de personajes
  useEffect(() => {

    const callData = async () => {
      const dataCha = await getCharacters()
      const dataQuo = await getQuotes()
      setInfo(dataCha)
      setQuotes(dataQuo)
      setConcatenate(true)
    }
    callData()
  }, [])

  useEffect(() => {
    const some = () => {
      if (concatenate) {
        const characterQuotes = info.reduce((quotesAccum, character) => {
          const phrases = quotes
            .filter((quote) => quote.author === character.name)
            .map((quote) => quote.quote)
          return [...quotesAccum,
          {
            ...character,
            quotes: phrases
          }
          ]
        }, [])
        setCharacters(characterQuotes)
        setFilterNames(characterQuotes)
        setLoad(false)
      }
    }
    some()
  }, [concatenate])

  useEffect(() => {
    if (value) {
      let filter = characters.filter(person => {
        return person.name.toLowerCase().includes(value.toLowerCase())
      })
      if (filter) {
        setFilterNames(filter)
      } else {
        setFilterNames(characters)
      }

    }
  }, [value])


   if (load) {
    return (<ButtonLoading/>)
  }
  return (
    <section>
      <ul className="border-black">
        <li className="flex flex-wrap justify-center bg-black border-black">
          <input
            type='texte'
            onChange={(e) => { setValue(e.target.value) }}
            value={value}
            placeholder='Search'
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-3"
          />
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 border-black bg-black h-1/5">
          {currentCharacters.map(Character => <Card key={Character.char_id} {...Character} />)}
        </li>
        <li className="flex flex-wrap justify-center bg-black">
          <Pagination
            filterNames={filterNames}
            setCurrentCharacters={setCurrentCharacters}
          />       
        </li>
      </ul> 
    </section>

  );
};

export default Character;