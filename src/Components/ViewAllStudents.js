import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { setStudents, removeStudent } from "../redux/actions/studentActions";
import api from "../api/students";


const ViewAllStudents = ()=>
{
    const dispatch = useDispatch();
    const  fetchStudents = async ()=>{
        const list = await api.get("/students");
        console.log(list,"res")
        dispatch(setStudents(list.data));
    }
    const students = useSelector(state=>{
        console.log(state);
        return state.students.students;
    })
    
    const [studentsManipulated,setStudentsManipulated]=useState(students)
    const [ready,setReady]=useState()
    const [searchTerm,setSearchTerm]=useState('')
    const searchHandler=()=>{
        
        const result=students.filter((student)=>(student.name.toLowerCase().startsWith(searchTerm.toLowerCase())))
        setStudentsManipulated(result)
    }
    const clearHandler=()=>{
        setStudentsManipulated(students);
        setSearchTerm('');
    }
    useEffect(()=>{
        fetchStudents();
    },[])
    useEffect(()=>{
        setStudentsManipulated(students)
    },[students])
    useEffect(()=>{
        const listOfStudents = studentsManipulated.map((student)=>{
            return (
                <li className="list-group-item" key={student.id}>
                    <div className='d-flex justify-content-between'>
                        <div>{student.name}</div>
                        <div>
                        <Link to={`/view/${student.id}`}>
                            <button type="button" className="mx-2 btn btn-outline-primary btn-sm">View</button>
                        </Link>
                        <Link to={`/edit/${student.id}`}>
                            <button type="button" className="mx-2 btn btn-outline-primary btn-sm">Edit</button>
                        </Link>
                            <button type="button" className="mx-2 btn btn-outline-danger btn-sm" onClick={()=>deleteStudent(student.id)}>Delete</button>
                        </div>
                    </div>
                </li>
            );
        });
        setReady(listOfStudents)
    },[studentsManipulated])
    const deleteStudent =async(id)=>{
        const response =  await api.delete(`/students/${id}`);
        console.log(response);
        if(response.status == 200){
            dispatch(removeStudent(id));
            alert("Deleted successfully");
        }
        else{
            alert(response.statusText);
        }
        
    }
    
    return (
        <div>
            <form className="d-flex mb-4">
                <input className="form-control me-2" type="text" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} name='searchTerm' style={{"width":"30%"}}/>
                <button className="btn btn-primary mx-2" type="button" onClick={searchHandler}>Search</button>
                <button className="btn btn-primary" type="button" onClick={clearHandler}>Clear Search</button>
            </form>
            <ul className="list-group">{ready}</ul>
        </div>
    );
}

export default ViewAllStudents;