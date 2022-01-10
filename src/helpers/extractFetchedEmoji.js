export const extractFetchedEmoji = ({
  unicode,
  htmlCode: _, //not using
  ...attributes
}) => {
  const codes = unicode.map((unicode) => {
    const code = unicode.split("U+")[1];
    return parseInt(code, 16);
  });
  return {
    ...attributes,
    unicode: String.fromCodePoint(...codes),
  };
};
