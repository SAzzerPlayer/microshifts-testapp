import React from "react";

export const EmojiView = React.memo(({ unicodes, className, label }) => {
  const codes = unicodes.map((unicode) => {
    const code = unicode.split("U+")[1];
    return parseInt(code, 16);
  });
  const smile = String.fromCodePoint(...codes);
  return (
    <span
      role={"img"}
      className={className}
      aria-label={label}
    >
      {smile}
    </span>
  );
});
