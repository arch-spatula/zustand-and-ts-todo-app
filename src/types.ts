export type progressType = "todo" | "done";

export type todoItemType = {
  id: string;
  content: string;
  progress: progressType;
};

export type todoSlice = {
  todos: todoItemType[];
  addTodo: (newTodoItem: todoItemType) => void;
  updateTodo: (id: string, content: string) => void;
  deleteTodo: (id: string) => void;
  shiftTodo: (id: string, progress: progressType) => void;
};

export type IconType = {
  icon: "arrow-back-up" | "circle-check" | "edit" | "trash";
};
