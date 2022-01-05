import React from "react";
import { getEmojisGroup } from "../../helpers/getEmojisGroup";
import {
  getCategories,
  getGroupsByCategory,
} from "../../helpers/requestParamsDict";
import "./styles.css";

const INITIAL_CATEGORY = getCategories()[0];
const INITIAL_GROUP = getGroupsByCategory(INITIAL_CATEGORY)[0];

export const EmojisList = () => {
  const [emojis, setEmojis] = React.useState([]);
  const [selectedCategory, selectCategory] = React.useState(INITIAL_CATEGORY);
  const [selectedGroup, selectGroup] = React.useState(INITIAL_GROUP);

  const requestEmojis = React.useCallback(async () => {
    const isValid = !!selectedCategory && !!selectedGroup;
    if (isValid) {
      const response = await getEmojisGroup(selectedGroup);
      setEmojis(response);
    }
  }, [selectedCategory, selectedGroup]);

  React.useEffect(requestEmojis, [requestEmojis]);

  return null;
};
