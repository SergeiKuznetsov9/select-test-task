import classNames from "classnames";

import CheckedIcon from "../../assets/icons/checkbox-list-checked.png";
import UncheckedIcon from "../../assets/icons/checkbox-list-unchecked.png";

import styles from "./listItem.module.css";

export const ListItem = ({ option, nameKey, isActive, multiple, onClick }) => {
  return (
    <div
      onClick={() => onClick(option)}
      className={classNames(styles.ListItem, {
        [styles.nonActiveItem]: !isActive,
      })}
    >
      <span>{nameKey ? option[nameKey] : option}</span>

      {multiple && (
        <>
          {isActive ? (
            <img src={CheckedIcon} alt="checked" />
          ) : (
            <img src={UncheckedIcon} alt="unchecked" />
          )}
        </>
      )}
    </div>
  );
};
