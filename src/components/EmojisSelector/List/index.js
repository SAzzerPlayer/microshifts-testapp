import React from "react";
import { useEmojisGroupLoader } from "./useEmojisGroupLoader";
import { EmojiView } from "../../shared/EmojiView";
import "./styles.css";

export const EmojisGroupList = ({ group, onSelect }) => {
  const emojis = useEmojisGroupLoader(group);

  const generateOnClick = React.useCallback(
    (emoji) => () => onSelect(emoji),
    [onSelect]
  );

  return (
    <div className={"emojis-list"}>
      {emojis.map((emoji) => (
        <div
          key={emoji.name}
          className={"emojis-list-item"}
          onClick={generateOnClick(emoji)}
        >
          <EmojiView unicode={emoji.unicode} label={emoji.name} />
        </div>
      ))}
    </div>
  );
};
