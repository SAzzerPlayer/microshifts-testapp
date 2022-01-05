import "./styles.css";

export const TextLine = ({ title, text }) => (
  <p className={"text"}>
    <span className={"title"}>{title}</span> {text}
  </p>
);
