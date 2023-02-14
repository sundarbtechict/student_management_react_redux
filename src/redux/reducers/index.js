import { combineReducers } from "redux";
import { studentReducer } from "./studentReducers";

const reducers = combineReducers({
    students: studentReducer
});
export default reducers;