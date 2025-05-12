import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import basketReducer from "./baskerReducer";
import quizReducer from "./quizReducer";




const reducers = combineReducers({
    basket: basketReducer,
    quiz:quizReducer
})

let store = createStore(reducers, composeWithDevTools())

window.store = store;
export default store;