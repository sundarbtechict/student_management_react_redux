import { ActionTypes } from "../constants/action-types";
const initialState = {
    students : [
        {
          name:"teddy",
          id: "104",
          mobile: "8220190919",
          email: "teddy@gmail.com"
        }
    ]
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
        case 'default':
            return state;
    }
    return state;
};

