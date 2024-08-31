import classNames from "classnames";

import styles from "./multiSelectControl.module.css";

export const MultiSelectControl = ({ children }) => {
  return (
    <div className={classNames(styles.MultiSelectControl)}>{children}</div>
  );
};
