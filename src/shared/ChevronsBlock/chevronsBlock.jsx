import ChevronUpIcon from "../../assets/icons/chevron-up.png";
import ChevronDownIcon from "../../assets/icons/chevron-down.png";

import styles from "./chevronsBlock.module.css";

export const ChevronsBlock = ({ isOpened }) => {
  return (
    <div className={styles.ChevronsBlock}>
      {isOpened ? (
        <img src={ChevronUpIcon} alt="opened" />
      ) : (
        <img src={ChevronDownIcon} alt="closed" />
      )}
    </div>
  );
};
