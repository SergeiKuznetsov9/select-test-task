import CrossIcon from "../../assets/icons/cross.png";
import { defineKey } from "../../utils/utils";

import styles from "./customChipsItem.module.css";

export const CustomChipsItem = ({ option, nameKey, removeOption }) => {
  return (
    <div className={styles.CustomChipsItem}>
      <span className={styles.chipsItemImgContainer}>
        <img
          className={styles.chipsItemImg}
          src={option.image}
          alt="chipsItem"
        />
      </span>
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
