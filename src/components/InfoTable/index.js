import React from "react";
import "./styles.css";
import { EmojiView } from "../shared/EmojiView";
import { TextLine } from "./TextLine";

const welcomeText = `Hello to Emojis investigator!`;
const descriptionText = `This info table shows selected emoji and it's short information. You can
        select category of emojis and specific group. Press on any emoji to read
        more info about it.`;

export const InfoTable = ({ emoji }) => {
  return (
    <div className={"table"}>
      <h2>{welcomeText}</h2>
      <code>{descriptionText}</code>
      <div className={"preview"}>
        {emoji ? (
          <>
            <EmojiView
              unicodes={emoji.unicode}
              className={"emoji-font-preview"}
              label={"emoji-preview"}
            />
            <div className={"preview-info"}>
              <TextLine title={"Name: "} text={emoji.name} />
              <TextLine title={"Category: "} text={emoji.category} />
              <TextLine title={"Group: "} text={emoji.group} />
            </div>
          </>
        ) : (
          <h3>You haven't chosen an emoticon yet.</h3>
        )}
      </div>
    </div>
  );
};
