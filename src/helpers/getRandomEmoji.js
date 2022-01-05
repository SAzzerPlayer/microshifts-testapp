export const getRandomEmoji = async () => {
  const url = "https://emojihub.herokuapp.com/api/random";
  return fetch(url).then((response) => response.json());
};
