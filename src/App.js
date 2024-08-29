import { ChevronsBlock } from "./shared/ChevronsBlock/chevronsBlock";
import { ChipsItem } from "./shared/ChipsItem/chipsItem";
import { ControlWrapper } from "./shared/ControlWrapper/controlWrapper";
import { DropdownBlock } from "./shared/DropdownBlock/dropdownBlock";
import { ListItem } from "./shared/ListItem/listItem";
import { PlaceholderControl } from "./shared/PlaceholderControl/placeholderControl";
import { SearchingInput } from "./shared/SearchingInput/searchingInput";
import { SingleSelectControl } from "./shared/SingleSelectControl/singleSelectControl";

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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ControlWrapper />
      <ControlWrapper error={true} />
      <ControlWrapper disabled={true} />
      <br />
      <PlaceholderControl placeholder={"Выберите значение"} />
      <PlaceholderControl placeholder={"Выберите значение"} isTyping />
      <SingleSelectControl option={"Select Item"} disabled />
      <SingleSelectControl option={"Select Item"} />
      <SearchingInput />
    </div>
  );
}

export default App;
