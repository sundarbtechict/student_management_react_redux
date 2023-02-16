import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../api/students";


const AddStudent = ()=>{
    const [student, setStudent] = useState({name:"",id:"",mobile:"",email:""});
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();
    const reset = ()=> {
        setStudent({name:"",id:"",mobile:"",email:""});
        setIsSubmit(false);
        setFormErrors({});
    }
    const validateForms = ()=>{
        const errors = {};
        if(student.name=="")
            errors.name = "Please Enter Your Name";
        if(student.id=="")
            errors.id = "Please Enter Your ID";
        if(student.mobile=="")
            errors.mobile = "Please Enter Your Mobile No";
        else if(student.mobile.length!=10 || !student.mobile.match(/^\d+$/))
            errors.mobile = "Please Enter Valid Mobile No";
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(student.email=="")
            errors.email = "Please Enter Your Email";
        else if(!student.email.match(mailformat))
            errors.email = "Please Enter Valid Email ID";
        return errors;
    }
    const handleChange = (e)=>{
        if(e.target){
            const {name, value} = e.target;
            setStudent({...student, [name]:value});
        }
    }
    const handleSubmit = (e)=>{
        setIsSubmit(true);
        setFormErrors(validateForms());
        e.preventDefault();   
        if(Object.keys(formErrors).length==0 && isSubmit)
            onSubmit();
    }
    const onSubmit = async()=>{
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
    useEffect(()=>{
       isSubmit && setFormErrors(validateForms());
    },[student])

    return (
    <form className='addStudent' onSubmit={handleSubmit}>
    <div className="card">
        <div className="card-header"><h4>Enter Student Details here</h4></div>
        <div className="card-body">
            <label htmlFor="name">Name : </label>
            <input type="text" className="form-control" id="name" value={student.name}
            onChange={handleChange} placeholder="Enter Name" name="name"/>
            {formErrors.name?<p className='errorMsg'>{formErrors.name}</p>:null}
            <label htmlFor="id">Id : </label>
            <input type="text" className="form-control" id="id" value={student.id}
                onChange={handleChange} placeholder="Enter the Id" name="id"/>
            {formErrors.id?<p className='errorMsg'>{formErrors.id}</p>:null}
            <label htmlFor="email">Email : </label>
            <input type="text" className="form-control" id="email" value={student.email}
                onChange={handleChange} placeholder="Enter email" name="email"/>
            {formErrors.email?<p className='errorMsg'>{formErrors.email}</p>:null}
            <label htmlFor="mobile">Mobile : </label>
            <input type="text" className="form-control" id="mobile" value={student.mobile}
                onChange={handleChange} placeholder="Enter mobile" name="mobile"/>
            {formErrors.mobile?<p className='errorMsg'>{formErrors.mobile}</p>:null}
            <div className='mt-3 d-flex justify-content-center'>
                <button type="submit" className="mx-2 btn btn-success btn-sm">Submit</button>
                <button type="button" onClick={reset} className="mx-2 btn btn-outline-primary btn-sm">Reset</button>
                <button type="button" onClick={goBack} className="mx-2 btn btn-outline-primary btn-sm">Back</button>
            </div>
        </div>
    </div>
    </form>

    );
}

export default AddStudent;