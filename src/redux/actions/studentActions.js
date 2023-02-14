import { ActionTypes } from '../constants/action-types';

export const setStudents = (students)=>{
    return {
        type : ActionTypes.SET_STUDENTS,
        payload : students
    };
};

export const removeStudent = (id)=>{
    return {
        type: ActionTypes.REMOVE_STUDENT,
        payload: id
    };
}