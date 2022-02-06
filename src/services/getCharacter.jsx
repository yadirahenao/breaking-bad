const apiURL = 'https://www.breakingbadapi.com/api';

export const getCharacters = async () => {
  const url = `${apiURL}/characters`;
  return fetch(url)
    .then((res) => res.json())
    .then(user => {console.log(url)})
    .catch((error) => console.log(error));
}

