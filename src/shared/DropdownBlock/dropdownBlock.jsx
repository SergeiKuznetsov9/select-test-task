import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./dropdownBlock.module.css";

const InnerDropdowmBlock = ({ isOpened, children }) => {
  return (
    <div
      className={classNames(styles.dropdownContent, {
        [styles.openedDropdownContent]: isOpened,
      })}
    >
      {children}
    </div>
  );
};

export const SingleDropdownBlock = ({ className, isOpened, children }) => (
  <div
    className={classNames(
      styles.DropdownBlock,
      { [styles.opendBlock]: isOpened },
      className
    )}
  >
    <InnerDropdowmBlock isOpened={isOpened} children={children} />
  </div>
);

export const MultiDropdownBlock = forwardRef(
  ({ className, isOpened, children }, dropdownRef) => (
    <div
      ref={dropdownRef}
      className={classNames(
        styles.DropdownBlock,
        { [styles.opendBlock]: isOpened },
        className
      )}
    >
      <InnerDropdowmBlock isOpened={isOpened} children={children} />
    </div>
  )
);
