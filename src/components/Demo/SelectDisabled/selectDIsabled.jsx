import { useState } from "react";
import { fruitsList } from "../../../assets/mockData/mockData";
import { Select } from "../../Select/select";

export const SelectDisabled = () => {
  const [options, setOptions] = useState(fruitsList);
  const [value, setValue] = useState(null);

  const createNewOption = (newOptionName) => {
    setOptions([...options, { name: newOptionName, val: newOptionName }]);
  };

  return (
    <Select
      label="Недоступный селект"
      options={options}
      placeholder="Выбери фрукт"
      value={value}
      onSelect={setValue}
      disabled={true}
      nameKey="name"
      createNewOption={createNewOption}
    />
  );
};
