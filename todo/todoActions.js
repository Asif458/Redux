import {
  FETCH_TODOS_START,
  FETCH_TODOS_ERROR,
  FETCH_TODOS_SUCCESS,
  ADD_TODO,
  DELETE_TODO,
} from "./todoTypes";

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_START });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      const data = await res.json();
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_ERROR, payload: error.message });
    }
  };
};

//add todo 

export const addtodo = (title)=>{
    return{
        type:ADD_TODO,
        payload:{
            id:Date.now(),
            title,
        }
    }
}

//delete todo 
export const deleteTodo = (id)=>{
    return{
        type:DELETE_TODO,
        payload:id,
    }
}
