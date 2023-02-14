import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../api/students";


const AddStudent = ()=>{
    const [student, setStudent] = useState({name:"",id:"",mobile:"",email:""});
    const navigate = useNavigate();
    const reset = ()=> setStudent({name:"",id:"",mobile:"",email:""});
    const onSubmit = async(e)=>{
        e.preventDefault();
        if(student.name==="" || student.id==='' ||student.email===""){
            alert("All fields are mandatory");
            return;
        }
        const resposnse =  await api.post("/students", student);
        console.log(resposnse);
        if(resposnse.status==201){
            reset();
            navigate("/");
        }
        else{
            alert(resposnse.statusText)
        }
    }
    const goBack = ()=> navigate(-1);


    return (
    <form onSubmit={(e)=>onSubmit(e)}>
    <h4>Enter Student Details here</h4>
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
                 onChange={(e) => setStudent({...student, id:e.target.value})} placeholder="Enter the Id" name="id"/>
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
        <button type="submit" className="btn btn-success">Submit</button>
    </div>
    </form>

    );
}

export default AddStudent;