import { useState, ChangeEvent } from "react";

const useTextInput = (initText: string = "") => {
  const [textInputValue, setTextInputValue] = useState(initText);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInputValue(e.target.value);
  };

  const resetInput = () => {
    setTextInputValue("");
  };

  return { textInputValue, handleInputChange, resetInput };
};

export default useTextInput;
