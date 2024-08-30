import classNames from "classnames";
import styles from "./singleSelectControl.module.css";

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
      {nameKey ? option[nameKey] : option}
    </div>
  );
};
