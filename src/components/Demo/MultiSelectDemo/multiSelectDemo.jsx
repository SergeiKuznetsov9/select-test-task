import { useState } from "react";
import { fruitsList } from "../../../assets/mockData/mockData";
import { Select } from "../../Select/select";

export const MultiSelectDemo = () => {
  const [options, setOptions] = useState(fruitsList);
  const [value, setValue] = useState(null);

  const onSetValue = (newValue) => {
    setValue(newValue);
    console.log("Мульти селект", newValue);
  };

  const createNewOption = (newOptionName) => {
    setOptions([...options, { name: newOptionName, val: newOptionName }]);
  };

  return (
    <Select
      label="Мульти селект"
      options={options}
      placeholder="Выбери фрукт"
      value={value}
      onSelect={onSetValue}
      nameKey="name"
      createNewOption={createNewOption}
      multiple
    />
  );
};
