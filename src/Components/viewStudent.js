import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from "../api/students";
import { useNavigate } from 'react-router-dom';


const ViewStudent = ()=>{
    const [student, setStudent]=useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const getStudent = async(id)=>{ 
            const response  = await api.get(`/students/${id}`);
            setStudent(response.data);
        }
    getStudent(id);    
    },[])

    const deleteStudent =async(id)=>{
        const response =  await api.delete(`/students/${id}`);
        console.log(response);
        if(response.status == 200){
            alert("Deleted successfully");
            navigate("/");
        }
        else{
            alert(response.statusText);
        }
        
    }
    const goBack = ()=> navigate(-1);

    return (
    <div className=''>
    <table className="table table-bordered mt-3">
        <tbody>
        <tr>
            <td>Name : </td>
            <td>{student.name}</td>
        </tr>
        <tr>
            <td>Id : </td>
            <td>{student.id}</td>
        </tr>
        <tr>
            <td>Email : </td>
            <td>{student.email}</td>
        </tr>
        <tr>
            <td>Mobile : </td>
            <td>{student.mobile}</td>
        </tr>
        </tbody>
    </table>
    <div className='my-3 d-flex justify-content-center'>
    <button type="button" onClick={()=>goBack()} className="mx-2 btn btn-outline-primary btn-sm">Back</button>
    <Link to={`/edit/${student.id}`}>
        <button type="button" className="mx-2 btn btn-outline-primary btn-sm">Edit</button>
    </Link>
    <button type="button" onClick={()=>deleteStudent(student.id)} className="mx-2 btn btn-outline-danger btn-sm">Delete</button>
    </div>
    </div>
    );
}

export default ViewStudent;