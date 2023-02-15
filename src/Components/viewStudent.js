import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudent, removeFetchedStudent, removeStudent } from '../redux/actions/studentActions';


const ViewStudent = ()=>{
    const student = useSelector(state=>state.studentData.student)
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchStudent(id));
        return ()=>dispatch(removeFetchedStudent());    // unmounting : clearing part when component this destroyed
    },[])

    const deleteStudent =async()=>dispatch(removeStudent(id, navigate));
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