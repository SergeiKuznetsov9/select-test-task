import classNames from "classnames";
import styles from "./singleSelectControl.module.css";

export const SingleSelectControl = ({ option, nameKey, disabled }) => {
  return (
    <div
      className={classNames(styles.SingleSelectControl, {
        [styles.disabledControl]: disabled,
      })}
    >
      {nameKey ? option[nameKey] : option}
    </div>
  );
};
