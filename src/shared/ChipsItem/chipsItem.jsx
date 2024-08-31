import CrossIcon from "../../assets/icons/cross.png";
import { defineKey } from "../../utils/utils";

import styles from "./chipsItem.module.css";

export const ChipsItem = ({ option, nameKey, removeOption }) => {
  return (
    <div className={styles.ChipsItem}>
      <span>{defineKey(option, nameKey)}</span>
      <button
        className={styles.closeButton}
        onClick={() => removeOption(option)}
      >
        <img src={CrossIcon} alt="close"></img>
      </button>
    </div>
  );
};
