import * as types from "./types";

const initialState = {
  TodoList: [],
  error: [],
  loading: false
};

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    //===============Get All list
    case types.GET_ALL_LIST_AND_CARD_DOING:
      return {
        ...state,
        loading: true,
        TodoList: action.payload
      };
    case types.GET_ALL_LIST_AND_CARD_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        TodoList: action.payload // nhận dử liệu từ action success gán cho state
      };
    case types.GET_ALL_LIST_AND_CARD_FALSE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default TodoListReducer;
