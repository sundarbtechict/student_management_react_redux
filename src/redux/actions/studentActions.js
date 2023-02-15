import { ActionTypes } from '../constants/action-types';
import api from "../../api/students";



export const setStudents = (students)=>{
    return {
        type : ActionTypes.SET_STUDENTS,
        payload : students
    };
};

export const fetchStudent = (id)=>{
    return async (dispatch)=>{
        let response = await api.get(`/students/${id}`);
        dispatch({type: ActionTypes.FETCH_STUDENT, payload: response.data});
    }
}

export const removeFetchedStudent = ()=>{
    return {
        type: ActionTypes.REMOVE_FETCHED_STUDENT,
    };
}

export const fetchStudents = ()=>{
    return async (dispatch)=>{
        let response = await api.get("/students");
        console.log(response.data, fetch);
        dispatch({type: ActionTypes.FETCH_STUDENTS, payload: response.data});
    };
}

export const removeStudent = (id, navigate)=>{
    return async (dispatch)=>{
        const response =  await api.delete(`/students/${id}`);
        //console.log(response);
        if(response.status == 200){
            dispatch({type: ActionTypes.REMOVE_STUDENT, payload: id});
            alert("Deleted successfully");
            navigate && navigate("/");
        }
        else{
            alert(response.statusText);
        }
    };
}