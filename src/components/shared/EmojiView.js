import React from "react";

export const EmojiView = React.memo(({ unicodes, className, label }) => {
  const smile = unicodes.map((unicode) => {
    const hexCode = unicode.split("U+")[1];
    return String.fromCharCode(parseInt(hexCode, 16));
  });
  return (
    <span role={"img"} className={className} aria-label={label}>
      {smile}
    </span>
  );
});
