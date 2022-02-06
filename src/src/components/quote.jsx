import React, { useState, useEffect } from "react";
import Card from "./card";

const Quote = () => {

  const [info, setInfo] = useState([]); 

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = async () => {
    const url = 'https://www.breakingbadapi.com/api/quotes';
    const resp = await fetch(url);
    const data = await resp.json(); 

    console.log(data);
    setInfo(data);
  };


  return (
    <section>
      <ul>
        {info.map(Quote => <Card key={ Quote.quote_id } {...Quote} />)}
        {/* {info.map(Quote => <li key={Quote.char_id}> { Quote.char_id}-{Quote.name}</li>)} */}
      </ul>     

    </section>

  );
};

export default Quote;