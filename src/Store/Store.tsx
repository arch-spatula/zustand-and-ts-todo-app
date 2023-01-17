import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { todoSlice } from "../types";
import createTodoSlice from "./todoSlice";

/**
 * slice마다 추상화시키고 결합시킬 수 있습니다.
 * 초기설정
 * @see https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
 * 타입스크립트 패턴
 * @see https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern
 * 브라우저에 저장
 * @see https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md
 */
const useBoundStore = create<todoSlice>()(
  persist(
    (...a) => ({
      ...createTodoSlice(...a),
    }),
    { name: "all-store", storage: createJSONStorage(() => localStorage) }
  )
);

export default useBoundStore;
