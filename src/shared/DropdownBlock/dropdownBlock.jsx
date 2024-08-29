import styles from "./dropdownBlock.module.css";

export const DropdownBlock = ({ children }) => {
  return (
    <div className={styles.DropdownBlock}>
      <div className={styles.dropdownContent}>{children}</div>
    </div>
  );
};
