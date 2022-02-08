const apiURL = 'https://www.breakingbadapi.com/api';

// export const getCharacters = async ({ limit, offset = 0 }) => {
//   const url = `${apiURL}/characters?limit=${limit}&offset=${offset * limit}`;
  
export const getCharacters = async () => {
  const url = `${apiURL}/characters`;
  
  return fetch(url)
    .then((res) => res.json())
    .then(res => res)
    .catch((error) => console.log(error));
}


export const getQuotes = async () => {
  const url = `${apiURL}/quotes`;
  return fetch(url)
    .then((res) => res.json())
    .then(res => res)
    .catch((error) => console.log(error));
}

