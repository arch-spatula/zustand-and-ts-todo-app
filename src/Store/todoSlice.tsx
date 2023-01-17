// 불필요한 복잡성 때문에 todo 이사는 나중에 하겠습니다.
import { StateCreator } from "zustand";
import type { todoSlice } from "../types";

const createTodoSlice: StateCreator<todoSlice> = (set) => ({
  //
  todos: [],

  //
  addTodo: (newTodo) => {
    set((state) => ({
      ...state,
      todos: [...state.todos, newTodo],
    }));
  },

  // 사용자가 편집을 완료하면 Save하는 기능입니다.
  updateTodo: (id, content) => {
    set((state) => ({
      ...state,
      todos: [...state.todos].map((todo) =>
        todo.id === id ? { ...todo, content } : todo
      ),
    }));
  },

  //
  deleteTodo: (id) => {
    set((state) => ({
      ...state,
      todos: [...state.todos].filter((todo) => todo.id !== id),
    }));
  },

  shiftTodo: (id, progress) => {
    set((state) => {
      const newArr = [...state.todos].filter((todo) => todo.id !== id);
      const shiftItem = [...state.todos].filter((todo) => todo.id === id)[0];
      return { ...state, todos: [...newArr, { ...shiftItem, progress }] };
    });
  },
});

export default createTodoSlice;
