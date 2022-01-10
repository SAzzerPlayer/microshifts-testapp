import { extractFetchedEmoji } from "./extractFetchedEmoji";

export const getEmojisGroup = async (group) => {
  let url = "https://emojihub.herokuapp.com/api/all";
  url += `/group_${group}`;
  return fetch(url)
    .then((response) => response.json())
    .then((emojis) => emojis.map(extractFetchedEmoji));
};
