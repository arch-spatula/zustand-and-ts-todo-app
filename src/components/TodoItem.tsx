import arrowBackUp from "/arrow-back-up.svg";
import circleCheck from "/circle-check.svg";
import edit from "/edit.svg";
import trash from "/trash.svg";
import cornerDownLeft from "/corner-down-left.svg";
import { FC, useState } from "react";
import type { todoItemType } from "../types";
import useBoundStore from "../Store/Store";
import { useTextInput } from "../hooks";
import IconButton from "./IconButton";

const TodoItem: FC<todoItemType> = ({ content, id, progress }) => {
  const { deleteTodo, shiftTodo, updateTodo } = useBoundStore(
    ({ deleteTodo, shiftTodo, updateTodo }) => ({
      deleteTodo,
      shiftTodo,
      updateTodo,
    })
  );

  // 추측: editing은 local state로 고유해도 됩니다.
  const [isEditing, setIsEditing] = useState(false);
  const { textInputValue, handleInputChange } = useTextInput(content);

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      updateTodo(id, textInputValue);
    }
  };

  return (
    <div className="bg-slate-100 flex flex-row justify-between items-center py-3 pr-2 pl-3 rounded-lg">
      {isEditing ? (
        <input
          className={
            "font-medium text-base rounded-lg py-1 px-3 border-2 border-emerald-500"
          }
          type="text"
          value={textInputValue}
          onChange={handleInputChange}
        />
      ) : (
        <h2 className="font-medium">{content}</h2>
      )}

      <div className="flex flex-row gap-2">
        {progress === "todo" ? (
          <IconButton
            onClick={() => shiftTodo(id, "done")}
            icon={circleCheck}
            alt="완료"
          />
        ) : (
          <IconButton
            onClick={() => shiftTodo(id, "todo")}
            icon={arrowBackUp}
            alt="뒤로가기"
          />
        )}

        {!isEditing ? (
          <IconButton
            onClick={() => handleToggleEdit()}
            icon={edit}
            alt="편집"
          />
        ) : (
          <IconButton
            onClick={() => handleToggleEdit()}
            icon={cornerDownLeft}
            alt="수정완료"
          />
        )}

        <IconButton onClick={() => deleteTodo(id)} icon={trash} alt="삭제" />
      </div>
    </div>
  );
};

export default TodoItem;
