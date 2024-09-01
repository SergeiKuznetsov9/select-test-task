import { MultiSelect } from "../MultiSelect/multiSelect";
import { SingleSelect } from "../SingleSelect/singleSelect";

export const Select = (props) => {
  const { multiple } = props;
  return multiple ? <MultiSelect {...props} /> : <SingleSelect {...props} />;
};
