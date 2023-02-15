import { ActionTypes } from "../constants/action-types";
const initialState = {
    students : [],
    student : {}
};

export const studentReducer = (state=  initialState, {type, payload} )=> {
    switch(type){
        case ActionTypes.SET_STUDENTS:
            return { ...state, students: payload };
        case ActionTypes.REMOVE_STUDENT:{
            const list = state.students.filter(student=>payload!=student.id);
            console.log(list);
            return {...state, students:list};
        }
        case ActionTypes.FETCH_STUDENTS:
            return { ...state, students: payload };
        case ActionTypes.FETCH_STUDENT:
            return { ...state, student: payload };
        case ActionTypes.REMOVE_FETCHED_STUDENT:
            return {...state, student:{}}
        case 'default':
            return state;
    }
    return state;
};

