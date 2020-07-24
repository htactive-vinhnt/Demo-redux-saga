import * as call from "./apiCaller";

// List =============================
export const getAllListAndCard = () => {
  return call.getDataApi(`/TodoList`); // gọi getDataApi từ apiCaller. '/TodoList' chính là đuôi sau của API
};
