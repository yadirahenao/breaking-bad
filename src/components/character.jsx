import React, { useState, useEffect, useContext } from "react";
import { getCharacters, getQuotes } from "../services/getCharacter";
import { gql, useLazyQuery } from '@apollo/client';
import Card from "./card";
import ButtonLoading from "./buttonLoading";
import Pagination from "./pagination";
import Context from "../context/userContext";

const GET_QUALIFY = gql`
  query GetPhraseQualify($input: userId) {
    getPhraseQualify(input: $input) {
      idUser
      idCharacter
      phrase
      qualify
      comment
      id
    }
  }
`;

const Character = () => {
  const [info, setInfo] = useState([]);
  const [value, setValue] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [concatenate, setConcatenate] = useState(false);
  const [load, setLoad] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [filterNames, setFilterNames] = useState([]);
  const { id, name, lastName } = useContext(Context);

  const [getData, { loading, data }] = useLazyQuery(GET_QUALIFY);

  // Llamado de personajes
  useEffect(() => {
    const callData = async () => {
      const dataCha = await getCharacters();
      const dataQuo = await getQuotes();
      setInfo(dataCha);
      setQuotes(dataQuo);
      setConcatenate(true);
    };
    callData();
  }, []);

  useEffect(() => {
    if (id != null) {
      getData({
        variables: {
          input: {
            userId: id,
          },
        },
      });
    }
  }, [getData, id]);

  useEffect(() => {
    const some = () => {
      if (concatenate && !loading) {
        const characterQuotes = info.reduce((quotesAccum, character) => {
          const phrases = quotes
            .filter((quote) => quote.author === character.name)
            .map((quote) => {
              return {
                phrase: quote.quote,
                rating: "",
                comment: "",
                id: "",
              };
            });
          return [
            ...quotesAccum,
            {
              ...character,
              quotes: phrases,
            },
          ];
        }, []);

        if (data) {
          for (let x = 0; x < data.getPhraseQualify.length; x++) {
            for (let y = 0; y < characterQuotes.length; y++) {
              if (
                data.getPhraseQualify[x].idCharacter ===
                characterQuotes[y].char_id
              ) {
                for (let z = 0; z < characterQuotes[y].quotes.length; z++) {
                  if (
                    data.getPhraseQualify[x].phrase ===
                    characterQuotes[y].quotes[z].phrase
                  ) {
                    characterQuotes[y].quotes[z].comment =
                      data.getPhraseQualify[x].comment;
                    characterQuotes[y].quotes[z].rating =
                      data.getPhraseQualify[x].qualify;
                    characterQuotes[y].quotes[z].id =
                      data.getPhraseQualify[x].id;
                  }
                }
              }
            }
          }
        }

        setCharacters(characterQuotes);
        setFilterNames(characterQuotes);
        setLoad(false);
      }
    };
    some();
  }, [concatenate, data, info, loading, quotes]);

  useEffect(() => {
    if (value) {
      let filter = characters.filter((person) => {
        return person.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilterNames(filter);
    }
  }, [characters, value]);

  if (load && loading) {
    return <ButtonLoading />;
  }
  return (
    <section>
      <ul className="border-black bg-black">
        <li className="flex flex-wrap justify-center bg-black border-black ">
          <input
            type="texte"
            onChange={(e) => {
              if (e.target.value.length === 0) {
                setFilterNames(characters);
              }
              setValue(e.target.value);
            }}
            value={value}
            placeholder="Search"
            className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-4"
          />
        </li>
        <li className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 border-black bg-black ">
          {currentCharacters.map((Character) => (
            <Card key={Character.char_id} {...Character} />
          ))}
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