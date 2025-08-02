import { createStore,applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { todoReducer } from "./todoReducer"

const rootreducer = combineReducers({
    todos:todoReducer,
})

const store = createStore(rootreducer,applyMiddleware(thunk))

export default store ;