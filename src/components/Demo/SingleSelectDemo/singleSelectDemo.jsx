import { useState } from "react";
import { fruitsList } from "../../../assets/mockData/mockData";
import { Select } from "../../Select/select";

export const SingleSelectDemo = () => {
  const [options, setOptions] = useState(fruitsList);
  const [value, setValue] = useState(null);

  const onSetValue = (newValue) => {
    setValue(newValue);
    console.log("Одиночный селект", newValue);
  };

  const createNewOption = (newOptionName) => {
    setOptions([...options, { name: newOptionName, val: newOptionName }]);
  };

  return (
    <Select
      label="Одиночный селект"
      options={options}
      placeholder="Выбери фрукт"
      value={value}
      onSelect={onSetValue}
      nameKey="name"
      createNewOption={createNewOption}
    />
  );
};
