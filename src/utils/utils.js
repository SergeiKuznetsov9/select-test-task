export const filterOptions = (options, nameKey, searchingText) => {
  if (!searchingText) {
    return options;
  }
  
  return options.filter((option) => {
    const name = defineKey(option, nameKey).toLowerCase();
    return name.includes(searchingText.toLowerCase());
  });
};

export const defineIsOptionSelected = (valuesStack, option, nameKey) =>
  Boolean(
    valuesStack.find(
      (selectedOption) =>
        defineKey(selectedOption, nameKey) === defineKey(option, nameKey)
    )
  );

export const defineKey = (option, nameKey) =>
  nameKey ? option[nameKey] : option;
