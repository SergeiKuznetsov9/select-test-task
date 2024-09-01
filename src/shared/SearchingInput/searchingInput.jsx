import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import styles from "./searchingInput.module.css";

export const SearchingInput = forwardRef(({ onInput, isFocused }, ref) => {
  const inputRef = useRef(null);

  const checkIsNeedOnBlur = () => {
    if (isFocused) {
      inputRef.current.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.innerText = "";
    },
  }));

  useEffect(() => {
    if (isFocused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
  }, [isFocused]);

  return (
    <div
      contentEditable
      className={styles.SearchingInput}
      onInput={onInput}
      onBlur={checkIsNeedOnBlur}
      ref={inputRef}
    ></div>
  );
});
