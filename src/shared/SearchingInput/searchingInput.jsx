import styles from "./searchingInput.module.css";

export const SearchingInput = ({ handleSearch }) => {
  return (
    <div
      contentEditable
      className={styles.SearchingInput}
      onInput={handleSearch}
    ></div>
  );
};
