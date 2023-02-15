import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudent, removeFetchedStudent } from "../redux/actions/studentActions";
import { useParams, useNavigate } from 'react-router-dom';
import api from "../api/students";


const EditStudent = ()=>{
    const studentData = useSelector(state=>state.studentData.student);
    const [student, setStudent] = useState({name:"",id:"",mobile:"",email:""});
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchStudent(id));
        return ()=>dispatch(removeFetchedStudent());    // unmounting : clearing part when component this destroyed   
    },[])
    useEffect(()=>{
        studentData.name && setStudent(studentData);
    },[studentData])
    const onSubmit = async(e)=>{
        e.preventDefault();
        if(student.name==="" || student.id==='' ||student.email===""){
            alert("All fields are mandatory");
            return;
        }
        const response =  await api.put(`/students/${id}`, student);
        console.log(response,"edit");
        if(response.status == 200)
        {
            navigate("/");
            alert("Student details updated");
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