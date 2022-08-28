import React, { useState, useEffect, useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { gql, useMutation } from '@apollo/client';
import Context from '../context/userContext';

const SAVE_QUALIFY = gql`
  mutation SavePhraseQualify($input: PhraseQualifyInput) {
    savePhraseQualify(input: $input) {
      idUser
      idCharacter
      phrase
      qualify
      comment
    }
  }
`;

const UPDATE_QUALIFY = gql`
  mutation UpdatePhraseQualify($id: ID!, $input: PhraseQualifyInput) {
    updatePhraseQualify(id: $id, input: $input) {
      id
      idUser
      idCharacter
      phrase
      qualify
      comment
    }
  }
`;

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

const StarRating = ({ char_id, phrase, saveRating, ratingId }) => {
  const { id } = useContext(Context);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  // Apollo Hook add Qualify
  const [savePhraseQualify] = useMutation(SAVE_QUALIFY, {
    update(cache, { data: { savePhraseQualify } }) {
      const { getPhraseQualify } = cache.readQuery({
        query: GET_QUALIFY,
        variables: {
          input: {
            userId: id,
          },
        },
      });
      cache.writeQuery({
        query: GET_QUALIFY,
        variables: {
          input: {
            userId: id,
          },
        },
        data: { getPhraseQualify: [...getPhraseQualify, savePhraseQualify] },
      });
    },
  });
  // Apollo update Qualify
  const [UpdatePhraseQualify] = useMutation(UPDATE_QUALIFY);

  const updateQualify = async (ratingValue) => {
    if (id) {
      try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await UpdatePhraseQualify({
          variables: {
            id: ratingId,
            input: {
              idUser: parseInt(id),
              idCharacter: char_id,
              phrase: phrase,
              qualify: ratingValue,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (ratingId !== "") {
      setRating(saveRating);
    }
  }, [ratingId, saveRating]);

  const setQualify = async (ratingValue) => {
    if (id) {
      try {
        // eslint-disable-next-line no-unused-vars
        const { data } = await savePhraseQualify({
          variables: {
            input: {
              idUser: parseInt(id),
              idCharacter: char_id,
              phrase: phrase,
              qualify: ratingValue,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Login to save qualify");
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <form>
            <label className="in-line appearance-none">
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  if (!rating) {
                    setRating(ratingValue);
                    setQualify(ratingValue);
                  } else {
                    setRating(ratingValue);
                    updateQualify(ratingValue);
                  }
                }}
                className="in-line appearance-none"
              />
              <FaStar
                onMouseEnter={() => {
                  setHover(ratingValue);
                }}
                onMouseLeave={() => setHover(null)}
                className="cursor-pointer"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#b0b2b8"}
              />
            </label>
          </form>
        );
      })}
    </div>
  );
};

export default StarRating;