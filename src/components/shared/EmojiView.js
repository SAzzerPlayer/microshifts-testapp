import React from "react";

export const EmojiView = React.memo(({ unicode, className, label }) => (
  <span role={"img"} className={className} aria-label={label}>
    {unicode}
  </span>
));
