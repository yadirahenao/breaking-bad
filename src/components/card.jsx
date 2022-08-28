import React from "react";
import StarRating from "./starRating"; 
import CommentBox from "./commentBox";

const Card = ({ char_id, img, name, nickname, birthday, quotes }) => {
  return (
    <section className="">
      <div className="flex flex-wrap justify-center bg-black border-black ">
        <div className="flex flex-col bg-green-100 rounded-lg w-full m-3 justify-center">
          <img
            src={img}
            alt={name}
            className="object-scale-down- rounded-md h-96 w-72 m-auto mt-5 mb-5"
          />
          <h2 className="text-center text-xl font-bold uppercase pb-2">
            {name}
          </h2>
          <h3 className="text-center pb-2">Nickname: {nickname}</h3>
          <h3 className="text-center pb-2">Birthday: {birthday}</h3>
          <div className="overflow-y-auto h-40">
            <h3 className="text-center font-bold pb-5 ">
              {quotes.map((quote, index) => (
                <>
                  <p>
                    {quote.phrase}
                    <StarRating
                      char_id={char_id}
                      phrase={quote.phrase}
                      saveRating={quote.rating}
                      ratingId={quote.id}
                    />
                  </p>
                  <CommentBox
                    comment={quote.comment}
                    ratingId={quote.id}
                  />
                  <br />
                </>
              ))}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
