import classNames from "classnames";

import styles from "./placeholderControl.module.css";

export const PlaceholderControl = ({ placeholder, isTyping }) => {
  return (
    <div
      className={classNames(styles.PlaceholderControl, {
        [styles.searchTyping]: isTyping,
      })}
    >
      {placeholder}
    </div>
  );
};
