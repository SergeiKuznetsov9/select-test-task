import CrossIcon from "../../assets/icons/cross.png";

import styles from "./chipsItem.module.css";

export const ChipsItem = ({ option, nameKey, removeOption }) => {
  return (
    <div className={styles.ChipsItem}>
      <span>{nameKey ? option[nameKey] : option}</span>
      <button
        className={styles.closeButton}
        onClick={() => removeOption(option)}
      >
        <img src={CrossIcon} alt="close"></img>
      </button>
    </div>
  );
};
