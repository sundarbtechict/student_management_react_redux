import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from "../api/students";


const EditStudent = ({updateStudentHandler})=>{
    const [student, setStudent]=useState({name:"",id:"",mobile:"",email:""});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        const getStudent = async(id)=>{ 
            const response  = await api.get(`/students/${id}`);
            setStudent(response.data);
        }
    getStudent(id);    
    },[])
    const onSubmit = async(e)=>{
        e.preventDefault();
        if(student.name==="" || student.id==='' ||student.email===""){
            alert("All fields are mandatory");
            return;
        }
        const response =  await api.put(`/students/${id}`, student);
        console.log(response);
        if(response.status == 200)
        {
            alert("Student details updated");
            navigate("/");
        }
        else
            alert(response.statusText)
    }
    const goBack = ()=> navigate(-1);


    return (
    <form  onSubmit={(e)=>onSubmit(e)}>
    <h4>Update Student Details here</h4>
    <table className="table table-bordered mt-3">   
        <tbody>
        <tr>
            <td><label htmlFor="name">Name : </label></td>
            <td>
                <input type="text" className="form-control" id="name" value={student.name}
                onChange={(e) => setStudent({...student, name:e.target.value})} placeholder="Enter Name" name="name"/>
            </td>
        </tr>
        <tr>
            <td><label htmlFor="id">Id : </label></td>
            <td>
                <input type="text" className="form-control" id="id" value={student.id}
                  placeholder="Enter the Id" name="id" readOnly/>
            </td>
        </tr>
        <tr>
            <td><label htmlFor="email">Email : </label></td>
            <td>
                <input type="text" className="form-control" id="email" value={student.email}
                 onChange={(e) => setStudent({...student, email:e.target.value})} placeholder="Enter email" name="email"/>
            </td>
        </tr>
        <tr>
            <td><label htmlFor="mobile">Mobile : </label></td>
            <td>
                <input type="text" className="form-control" id="mobile" value={student.mobile}
                 onChange={(e) => setStudent({...student, mobile:e.target.value})} placeholder="Enter mobile" name="mobile"/>
            </td>
        </tr>
        </tbody>
    </table>
    <div className='mt-3 d-flex justify-content-center'>
        <button type="button" onClick={()=>goBack()} className="mx-2 btn btn-primary btn-sm">Back</button>
        <button type="submit" className="btn btn-success btn-sm">Update</button>
    </div>
    </form>

    );
}

export default EditStudent;