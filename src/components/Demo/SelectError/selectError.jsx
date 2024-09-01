import { useState } from "react";
import { fruitsList } from "../../../assets/mockData/mockData";
import { Select } from "../../Select/select";

export const SelectError = () => {
  const [options, setOptions] = useState(fruitsList);
  const [value, setValue] = useState(null);

  const onSetValue = (newValue) => {
    setValue(newValue);
    console.log("Селект с ошибкой", newValue);
  };

  const createNewOption = (newOptionName) => {
    setOptions([...options, { name: newOptionName, val: newOptionName }]);
  };

  return (
    <Select
      label="Селект с ошибкой"
      options={options}
      placeholder="Выбери фрукт"
      value={value}
      onSelect={onSetValue}
      error="error"
      disabled={false}
      nameKey="name"
      createNewOption={createNewOption}
    />
  );
};
