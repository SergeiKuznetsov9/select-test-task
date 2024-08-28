import { ChevronsBlock } from "./shared/ChevronsBlock/chevronsBlock";
import { ChipsItem } from "./shared/ChipsItem/chipsItem";
import { DropdownBlock } from "./shared/DropdownBlock/dropdownBlock";
import { ListItem } from "./shared/ListItem/listItem";

function App() {
  return (
    <div className="App">
      <ChevronsBlock isOpened={true} />
      <ChevronsBlock isOpened={false} />
      <DropdownBlock>
        <ListItem option="option 1" isActive={false} />
        <ListItem option="option 2" isActive={true} />
        <ListItem option="option 3" isActive={false} />
        <ListItem option="option 4" isActive={true} />
        <ListItem option="option 5" isActive={true} />
        <ListItem option="option 6" isActive={false} />
        <ListItem option="option 7" isActive={false} />
        <ListItem option="option 8" isActive={false} />
        <ListItem option="option 9" isActive={false} />
      </DropdownBlock>
      <ChipsItem option="option 1" />
    </div>
  );
}

export default App;
