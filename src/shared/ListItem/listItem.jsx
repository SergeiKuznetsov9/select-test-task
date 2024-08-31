import classNames from "classnames";

import CheckedIcon from "../../assets/icons/checkbox-list-checked.png";
import UncheckedIcon from "../../assets/icons/checkbox-list-unchecked.png";
import { defineKey } from "../../utils/utils";

import styles from "./listItem.module.css";

export const ListItem = ({ option, nameKey, isActive, multiple, onClick }) => {
  return (
    <div
      onClick={() => onClick(option)}
      className={classNames(styles.ListItem, {
        [styles.nonActiveItem]: !isActive,
      })}
    >
      <span>{defineKey(option, nameKey)}</span>
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
