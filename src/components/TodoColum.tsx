import { FC } from "react";
import useBoundStore from "../Store/Store";
import type { progressType } from "../types";
import TodoItem from "./TodoItem";

interface TodoColumProps {
  progress: progressType;
}

const TodoColum: FC<{ progress: progressType }> = ({
  progress,
}: TodoColumProps) => {
  const todos = useBoundStore((state) => state.todos);

  return (
    <div className="w-1/2">
      <h2 className="font-bold text-2xl py-4 px-2">{progress}</h2>
      <ul className="flex flex-col gap-4">
        {todos
          .filter((todo) => todo.progress === progress)
          .map(({ id, content, progress }) => (
            <li key={id}>
              <TodoItem id={id} content={content} progress={progress} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoColum;
