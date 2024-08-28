import CrossIcon from "../../assets/icons/cross.png";

import styles from "./chipsItem.module.css";

export const ChipsItem = ({ option, nameKey }) => {
  return (
    <div className={styles.ChipsItem}>
      <span>{nameKey ? option[nameKey] : option}</span>
      <button className={styles.closeButton}>
        <img src={CrossIcon} alt="close"></img>
      </button>
    </div>
  );
};
