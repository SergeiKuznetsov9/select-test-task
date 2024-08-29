import classNames from "classnames";

import styles from "./controlWrapper.module.css";

export const ControlWrapper = ({ error, disabled }) => {
  return (
    <div
      className={classNames(styles.ControlWrapper, {
        [styles.controlWrapperHoverStyles]: !error && !disabled,
        [styles.controlWrapperError]: error,
      })}
    ></div>
  );
};
