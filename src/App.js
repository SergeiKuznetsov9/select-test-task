import { CustomSelect } from "./components/Demo/CustomSelect/customSelect";
import { MultiSelectDemo } from "./components/Demo/MultiSelectDemo/multiSelectDemo";
import { SelectDisabled } from "./components/Demo/SelectDisabled/selectDIsabled";
import { SelectError } from "./components/Demo/SelectError/selectError";
import { SingleSelectDemo } from "./components/Demo/SingleSelectDemo/singleSelectDemo";

function App() {
  return (
    <div className="App">
      <SelectError />
      <SelectDisabled />
      <SingleSelectDemo />
      <MultiSelectDemo />
      <CustomSelect />
    </div>
  );
}

export default App;
