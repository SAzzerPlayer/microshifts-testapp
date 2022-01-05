import React from "react";
import "./styles.css";
import { EmojiDetails } from "./EmojiDetails";

const welcomeText = `Welcome to Emojis Investigator!`;
const descriptionText = `This info table shows the selected emoji and its short information. You can
        select a category of emojis and then a specific group. Press on any emoji to read
        more info about it.`;

export const InfoTable = ({ emoji }) => {
  return (
    <div className={"table"}>
      <h2>{welcomeText}</h2>
      <code>{descriptionText}</code>
      {emoji ? (
        <EmojiDetails {...emoji} />
      ) : (
        <h3>You haven't chosen an emoticon yet.</h3>
      )}
    </div>
  );
};
