import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Counter from "./Counter";
import UserComponent from "./components/UserComponent";
import { useEffect } from "react";
import { fetchTodos } from "../todo/todoActions";

function App() {
   const dispatch =useDispatch();
   const {loading,todos,error} = useSelector(state=>state.todos);

   useEffect(()=>{
    dispatch(fetchTodos)
   },[dispatch])

  return (
    <>
      <h1> redux todo </h1>

      {loading&&<p>loaading...</p>}
      {error&&<p>error</p>}

      <ul>
        {todos.map((todo)=>{
          <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    
     
    </>
  );
}

 
export default App;


  
