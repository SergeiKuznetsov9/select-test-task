import { useState } from "react";
import { SingleSelect } from "./components/SingleSelect/singleSelect";
import { CustomDropdownBlock } from "./shared/CustomDropdown/customDropdownBlock";
import { fruitsList, fruitsListFlat } from "./assets/mockData/mockData";

function App() {
  const [options, setOptions] = useState(fruitsList);

  const [value, setValue] = useState(null);
  const [valueFlat, setValueFlat] = useState(null);

  const handleSelect = (value) => {
    setValue(value);
  };

  const handleSelectFlat = (value) => {
    setValueFlat(value);
  };

  const createItem = (newOptionName) => {
    setOptions([...options, { name: newOptionName, val: newOptionName }]);
  };

  return (
    <div className="App">
      <SingleSelect
        label="Single Select"
        placeholder="Выбери значение"
        value={value}
        onSelect={handleSelect}
        options={options}
        nameKey="name"
        createNewOption={createItem}
        customDropdownBlock={CustomDropdownBlock}
      />

      <SingleSelect
        label="Single Select"
        placeholder="Выбери значение"
        value={valueFlat}
        onSelect={handleSelectFlat}
        options={fruitsListFlat}
      />
    </div>
  );
}

export default App;
