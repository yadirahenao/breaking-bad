import React from "react";

const Card = ({ img, name, nickname, birthday, quotes }) => {
  return (
    <div className="w-full min-h-screen bg-green-100  ">

      {/* <div className ="max-w-sm rounded overflow-hidden shadow-lg"></div>   */}

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col bg-white rounded-lg-shadow-md w-full m-6 overflow-hidden sm:w-96">
          <img src={img} alt={name} className="h-30  m-6" />
          <h2 className="text-center px-2 pb-5">{name}</h2>
          <h3 className="text-center pb-2">Nickname: {nickname}</h3>
          <h3 className="text-center pb-5">Birthday: {birthday}</h3>
          <h3 className="text-center pb-5">Phrases: {quotes.map((text) => <><p>{text}</p><br /></>)}</h3>
        </div>
      </div>

    </div>
  );
};

export default Card;
