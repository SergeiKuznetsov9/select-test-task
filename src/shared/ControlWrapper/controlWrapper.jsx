import { forwardRef } from "react";
import classNames from "classnames";

import styles from "./controlWrapper.module.css";

export const ControlWrapper = forwardRef(
  ({ error, disabled, onCLick, children, className }, controlWrapperRef) => {
    return (
      <div
        ref={controlWrapperRef}
        className={classNames(
          styles.ControlWrapper,
          {
            [styles.controlWrapperHoverStyles]: !error && !disabled,
            [styles.controlWrapperError]: error,
          },
          className
        )}
        onClick={onCLick}
      >
        {children}
      </div>
    );
  }
);
