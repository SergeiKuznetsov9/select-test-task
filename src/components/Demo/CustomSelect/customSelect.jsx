import { useState } from "react";
import { fruitsList } from "../../../assets/mockData/mockData";
import { Select } from "../../Select/select";
import { CustomChipsItem } from "../../../shared/CustomChipsItem/customChipsItem";
import { CustomDropdownBlock } from "../../../shared/CustomDropdown/customDropdownBlock";

export const CustomSelect = () => {
  const [options, setOptions] = useState(fruitsList);
  const [value, setValue] = useState(null);

  const onSetValue = (newValue) => {
    setValue(newValue);
    console.log("Кастомный селект", newValue);
  };

  const createNewOption = (newOptionName) => {
    setOptions([...options, { name: newOptionName, val: newOptionName }]);
  };

  return (
    <Select
      label="Кастомный селект"
      options={options}
      placeholder="Выбери фрукт"
      value={value}
      onSelect={onSetValue}
      nameKey="name"
      createNewOption={createNewOption}
      chipsItem={CustomChipsItem}
      customDropdownBlock={CustomDropdownBlock}
      multiple
    />
  );
};
