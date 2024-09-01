import { useEffect, useRef, useState } from "react";

import { ControlWrapper } from "../../shared/ControlWrapper/controlWrapper";
import { PlaceholderControl } from "../../shared/PlaceholderControl/placeholderControl";
import { SearchingInput } from "../../shared/SearchingInput/searchingInput";
import { ChevronsBlock } from "../../shared/ChevronsBlock/chevronsBlock";
import { MultiDropdownBlock as DefaultDropdownBlock } from "../../shared/DropdownBlock/dropdownBlock";
import { ListItem } from "../../shared/ListItem/listItem";
import { CreateItem } from "../../shared/CreateItem/createItem";
import { MultiSelectControl } from "../../shared/MultiSelectControl/multiSelectControl";
import { ChipsItem as DefaultChipsItem } from "../../shared/ChipsItem/chipsItem";
import {
  defineIsOptionSelected,
  defineKey,
  filterOptions,
} from "../../utils/utils";

import styles from "./multiSelect.module.css";

export const MultiSelect = ({
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
  chipsItem: CustomChipsItem,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [searchingText, setSearchingText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const controlWrapperRef = useRef(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const isValueSelected = Boolean(value && value.length);

  const handleInput = (searchingCriteria) => {
    setSearchingText(searchingCriteria.target.innerText);
  };

  const handleSelect = (option) => {
    if (!isValueSelected) {
      onSelect([option]);
      return;
    }

    const isOptionSelected = defineIsOptionSelected(value, option, nameKey);
    let newValue;

    if (isOptionSelected) {
      newValue = value.filter((selectedOption) => {
        return (
          defineKey(selectedOption, nameKey) !== defineKey(option, nameKey)
        );
      });
    } else {
      newValue = [...value, option];
    }

    onSelect(newValue);
  };

  const changeSelectStatus = (status) => {
    if (!status) {
      setSearchingText("");
      inputRef.current.clear();
    }
    setIsOpened(status);
  };

  const onRemoveOption = (option) => {
    const optionName = defineKey(option, nameKey);

    onSelect(
      value.filter(
        (selectedOption) => defineKey(selectedOption, nameKey) !== optionName
      )
    );
  };

  useEffect(() => {
    if (isOpened) {
      setFilteredOptions(filterOptions(options, nameKey, searchingText));
    }
  }, [isOpened, options, nameKey, searchingText]);

  useEffect(() => {
    const clickHandler = (event) => {
      if (
        !controlWrapperRef.current?.contains(event.target) &&
        !dropdownRef.current?.contains(event.target)
      ) {
        changeSelectStatus(false);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => document.removeEventListener("click", clickHandler);
  }, []);

  const DropdownBlockComponent = CustomDropdownBlock || DefaultDropdownBlock;
  const ChipsItem = CustomChipsItem || DefaultChipsItem;
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
          {!isValueSelected && (
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

          {isValueSelected && (
            <>
              <MultiSelectControl
                option={value}
                nameKey={nameKey}
                disabled={disabled}
                isSelectOpened={isOpened}
              >
                {value.map((label) => (
                  <ChipsItem
                    option={label}
                    nameKey={nameKey}
                    key={defineKey(label, nameKey)}
                    removeOption={onRemoveOption}
                  />
                ))}
                <SearchingInput
                  onInput={handleInput}
                  isFocused={isOpened}
                  ref={inputRef}
                />
              </MultiSelectControl>
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
            ref={dropdownRef}
          >
            {(filteredOptions ? filteredOptions : options).map((option) => {
              let isOptionSelected;

              if (isValueSelected) {
                isOptionSelected = defineIsOptionSelected(
                  value,
                  option,
                  nameKey
                );
              }
              return (
                <ListItem
                  key={defineKey(option, nameKey)}
                  option={option}
                  nameKey={nameKey}
                  isActive={isOptionSelected}
                  onClick={handleSelect}
                  multiple
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
