import React, { forwardRef } from "react";
import classNames from "classnames";

import styles from "./customDropdownBlock.module.css";

export const CustomDropdownBlock = forwardRef(
  ({ children, isOpened }, dropdownRef) => {
    return (
      <>
        <div
          ref={dropdownRef}
          className={classNames(styles.CustomDropdownBlock, {
            [styles.opened]: isOpened,
          })}
        >
          <h3 className={styles.header}>It's a custom dropdown </h3>
          {children}
        </div>
      </>
    );
  }
);
