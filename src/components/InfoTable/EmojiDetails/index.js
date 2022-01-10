import React from "react";
import { EmojiView } from "../../shared/EmojiView";
import { TextLine } from "../../shared/TextLine";
import "./styles.css";

export const EmojiDetails = ({ unicode, name, category, group }) => (
  <div className={"details"}>
    <EmojiView
      unicode={unicode}
      className={"details-emoji-font"}
      label={"details-emoji-font"}
    />
    <div className={"details-info"}>
      <TextLine title={"Name: "} text={name} />
      <TextLine title={"Category: "} text={category} />
      <TextLine title={"Group: "} text={group} />
    </div>
  </div>
);
