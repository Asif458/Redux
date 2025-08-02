import { useDispatch,useSelector } from "react-redux";
import { dec, inc } from "../counterReducer";

function Counter(){
    const dispatch = useDispatch()
    const count = useSelector(state=> state.counter.count);
    const username = useSelector((state)=> state.user.name)
    const loggedIn = useSelector((state)=> state.user.loggedIn)
    return(
        <>

        <h1>{count}</h1>
                 

        <button onClick={()=>{
            dispatch( inc())
        }}>increment</button>

        <button onClick={()=>{
            dispatch(dec())
        }}>decrement</button>

        
        <p>username:{username}</p>
        <p>loggedin:{loggedIn?"yes":"no"}</p>

        </>

    )
}

export default Counter;