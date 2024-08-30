import classNames from "classnames";

import styles from "./dropdownBlock.module.css";

export const DropdownBlock = ({ className, isOpened, children }) => {
  return (
    <div
      className={classNames(
        styles.DropdownBlock,
        { [styles.opendBlock]: isOpened },
        className
      )}
    >
      <div
        className={classNames(styles.dropdownContent, {
          [styles.openedDropdownContent]: isOpened,
        })}
      >
        {children}
      </div>
    </div>
  );
};
