import { useState, useCallback, useEffect } from "react";
import { getEmojisGroup } from "../../../helpers/getEmojisGroup";

export const useEmojisGroupLoader = (group) => {
  const [emojis, setEmojis] = useState([]);

  const requestEmojis = useCallback(async () => {
    let response = undefined;
    if (!!group) {
      response = await getEmojisGroup(group);
    }
    setEmojis(response);
  }, [group]);

  useEffect(requestEmojis, [requestEmojis]);

  return emojis;
};
