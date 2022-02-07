import React from "react";

const Card = ({ img, name, nickname, birthday, quotes }) => {
  return (
    <section className="w-full min-h-screen bg-black border-black">
      <div className="flex flex-wrap justify-center bg-black border-black ">
        <div className="flex flex-col bg-green-100 rounded-lg w-full m-3 justify-center h-1/5">
          <img src={img} alt={name} className="object-scale-down- rounded-md h-96 w-72 m-auto mt-5 mb-5" />
          <h2 className="text-center text-2xl font-bold uppercase pb-5">{name}</h2>
          <h3 className="text-center pb-2">Nickname: {nickname}</h3>
          <h3 className="text-center pb-5">Birthday: {birthday}</h3>
          <div className="overflow-y-auto h-24">
            <h3 className="text-center pb-5 font-bold"> Quotes:</h3>
            <h3 className="text-center pb-5"> {quotes.map((text) => <><p>{text}</p><br /></>)}</h3>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Card;