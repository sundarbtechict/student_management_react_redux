import { combineReducers } from "redux";
import { studentReducer } from "./studentReducers";

const reducers = combineReducers({
    studentData: studentReducer
});
export default reducers;