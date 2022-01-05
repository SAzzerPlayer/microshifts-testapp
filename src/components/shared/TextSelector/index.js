import React from "react";

export const TextSelector = ({
  name,
  values,
  selectedValue,
  onChangeValue,
}) => {
  const onChange = React.useCallback(
    (e) => {
      onChangeValue(e.target.value);
    },
    [onChangeValue]
  );
  return (
    <select name={name} value={selectedValue} onChange={onChange}>
      {values.map((value) => {
        const selected = selectedValue === value;
        return (
          <option
            key={value}
            value={value}
            className={`select ${selected ? "active" : "inactive"}`}
          >
            {value}
          </option>
        );
      })}
    </select>
  );
};
