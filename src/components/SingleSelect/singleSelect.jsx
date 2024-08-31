import { useEffect, useRef, useState } from "react";

import { ControlWrapper } from "../../shared/ControlWrapper/controlWrapper";
import { PlaceholderControl } from "../../shared/PlaceholderControl/placeholderControl";
import { SearchingInput } from "../../shared/SearchingInput/searchingInput";
import { ChevronsBlock } from "../../shared/ChevronsBlock/chevronsBlock";
import { SingleDropdownBlock as DefaultDropdownBlock } from "../../shared/DropdownBlock/dropdownBlock";
import { ListItem } from "../../shared/ListItem/listItem";
import { SingleSelectControl } from "../../shared/SingleSelectControl/singleSelectControl";
import { CreateItem } from "../../shared/CreateItem/createItem";
import { defineKey, filterOptions } from "../../utils/utils";

import styles from "./singleSelect.module.css";

export const SingleSelect = ({
  label,
  options,
  placeholder,
  value,
  onSelect,
  error,
  disabled,
  nameKey,
  createNewOption,
  customDropdownBlock: CustomDropdownBlock,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchingText, setSearchingText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const controlWrapperRef = useRef(null);
  const inputRef = useRef(null);

  const handleInput = (searchingCriteria) => {
    setSearchingText(searchingCriteria.target.innerText);
  };

  const handleSelect = (option) => {
    onSelect(option);
  };

  const changeSelectStatus = (status) => {
    if (!status) {
      setSearchingText("");
      inputRef.current.clear();
    }
    setIsOpened(status);
  };

  useEffect(() => {
    if (isOpened) {
      setFilteredOptions(filterOptions(options, nameKey, searchingText));
    }
  }, [isOpened, options, nameKey, searchingText]);

  useEffect(() => {
    const clickHandler = (event) => {
      if (!controlWrapperRef.current?.contains(event.target)) {
        changeSelectStatus(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, []);

  const DropdownBlockComponent = CustomDropdownBlock || DefaultDropdownBlock;
  return (
    <div className={styles.SingleSelect}>
      <div className={styles.label}>{label}</div>
      <ControlWrapper
        error={error}
        disabled={disabled}
        onCLick={() => changeSelectStatus(true)}
        className={styles.controlWrapper}
        ref={controlWrapperRef}
      >
        <div className={styles.controlContent}>
          {!value && (
            <>
              {!searchingText && (
                <PlaceholderControl
                  placeholder={placeholder}
                  isTyping={isOpened}
                />
              )}
              <SearchingInput
                onInput={handleInput}
                isFocused={isOpened}
                ref={inputRef}
              />
            </>
          )}

          {value && (
            <>
              <SearchingInput
                onInput={handleInput}
                isFocused={isOpened}
                ref={inputRef}
              />
              {!searchingText && (
                <SingleSelectControl
                  option={value}
                  nameKey={nameKey}
                  disabled={disabled}
                  isSelectOpened={isOpened}
                />
              )}
            </>
          )}
        </div>
        <ChevronsBlock isOpened={isOpened} />
      </ControlWrapper>
      <div className={styles.dropdownWrapper}>
        {filteredOptions.length > 0 ? (
          <DropdownBlockComponent
            className={styles.dropdownBlock}
            isOpened={isOpened}
          >
            {(filteredOptions ? filteredOptions : options).map((option) => {
              let currentOptionName;
              let selectedOptionName;

              if (value) {
                currentOptionName = defineKey(option, nameKey);
                selectedOptionName = defineKey(value, nameKey);
              }

              return (
                <ListItem
                  key={defineKey(option, nameKey)}
                  option={option}
                  nameKey={nameKey}
                  isActive={value && currentOptionName === selectedOptionName}
                  onClick={handleSelect}
                />
              );
            })}
          </DropdownBlockComponent>
        ) : (
          <CreateItem
            newOptionName={searchingText}
            createNewOption={createNewOption}
            isOpened={isOpened}
          />
        )}
      </div>
    </div>
  );
};
