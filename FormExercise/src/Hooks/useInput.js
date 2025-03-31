import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValueValid = validationFn(inputValue);

  function inputBlurHandler() {
    setDidEdit(true);
  }

  function InputChangeHandler(passedData) {
    setInputValue(passedData);
  }

  function resetHandler() {
    setDidEdit(false);
    setInputValue(defaultValue);
  }

  return {
    value: inputValue,
    InputChangeHandler,
    inputBlurHandler,
    hasError: didEdit && !isValueValid,
    resetHandler,
  };
}
