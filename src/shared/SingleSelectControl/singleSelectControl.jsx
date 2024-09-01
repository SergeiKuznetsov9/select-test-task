import classNames from "classnames";
import styles from "./singleSelectControl.module.css";
import { defineKey } from "../../utils/utils";

export const SingleSelectControl = ({
  option,
  nameKey,
  disabled,
  isSelectOpened,
}) => {
  return (
    <div
      className={classNames(styles.SingleSelectControl, {
        [styles.dimColor]: disabled | isSelectOpened,
      })}
    >
      {defineKey(option, nameKey)}
    </div>
  );
};
