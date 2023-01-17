import { ChangeEvent, FC, useState } from "react";
import type { todoItemType } from "../types";
import { nanoid } from "nanoid";
import useBoundStore from "../Store/Store";
import { useTextInput } from "../hooks";

const CreateTodo: FC = () => {
  const addTodo = useBoundStore((state) => state.addTodo);

  // useTextInput으로 리팩토링
  const {
    textInputValue: inputValue,
    handleInputChange,
    resetInput,
  } = useTextInput();

  // 데이터 스키마 정의하기
  const newTodo: todoItemType = {
    id: nanoid(),
    content: inputValue,
    progress: "todo",
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addTodo(newTodo);
    resetInput();
  };

  return (
    <form className="flex h-24 bg-slate-100 items-center justify-center gap-4">
      <input
        className="px-3 py-2 border-2 border-emerald-500 rounded-lg text-base"
        type="text"
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        className="px-3 py-2 border-2 border-emerald-500 bg-emerald-500 text-white rounded-lg text-base"
        onClick={handleSubmit}
      >
        생성
      </button>
    </form>
  );
};

export default CreateTodo;
