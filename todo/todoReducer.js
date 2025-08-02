import {
  FETCH_TODOS_START,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  ADD_TODO,
  DELETE_TODO,
} from "./todoTypes";

const initialState = {
  loading: false,
  todos: [],
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_START:
      return { ...state, loading: true, todos: null, error: null };

    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload, error: null };

    case FETCH_TODOS_ERROR:
      return { ...state, loading: false, todos: null, error: action.error };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
