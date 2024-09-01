import PlusIcon from "../../assets/icons/plus.png";

import styles from "./createItem.module.css";

export const CreateItem = ({ newOptionName, createNewOption, isOpened }) => {
  return (
    <>
      {isOpened && (
        <div className={styles.CreateItem}>
          <div
            className={styles.innerBlock}
            onClick={() => createNewOption(newOptionName)}
          >
            <img src={PlusIcon} alt="plus" />
            <span>Создать «{newOptionName}»</span>
          </div>
        </div>
      )}
    </>
  );
};
