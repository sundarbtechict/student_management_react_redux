import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
import Header from "./Components/header";
import ViewAllStudents from "./Components/ViewAllStudents";
import ViewStudent from "./Components/viewStudent";
import api from "./api/students";

function App() {
  // const [students, setStudents] = useState([]);
  // const  fetchStudents = async ()=>{
  //   const list = await api.get("/students");
  //   return list;
  // }
  
  //const listOfStudents = JSON.parse(localStorage.getItem("students"));
  // const addStudentHandler = (student)=> {
  //   setStudents([...students,student])
  //   const addStudent = async (student)=>{
  //   const resposnse =  await api.post("/students", student);
  //   console.log(resposnse);
  //   }
  //   addStudent(student);
  // };
  // const deleteStudent = (id)=> {
  //   const list = students.filter(student => student.id!==id);
  //   setStudents(list);
  //   const deleteStudent = async (id)=>{
  //     const resposnse =  await api.delete(`/students/${id}`);
  //     console.log(resposnse);
  //   } 
  //   deleteStudent(id);
  // };
  // const updateStudent = (student)=> {
  //   const list = students.filter(item => item.id!==student.id);
  //   setStudents([...list, student]);
  //   const updateStudent = async (id)=>{
  //     const resposnse =  await api.put(`/students/${id}`, student);
  //     console.log(resposnse);
  //   } 
  //   updateStudent(student.id);
  // };

  // useEffect(()=>{
  //   const getStudents = async ()=> {
  //     const listOfStudents = await fetchStudents();
  //     if(listOfStudents.data)
  //       setStudents(listOfStudents.data)
  //   };
  //   getStudents();
  // },[]);
  // useEffect(()=>{
  //   //localStorage.setItem("students", JSON.stringify(students));
  // },[students]);
  

  return (
    <div className="App">
      <Router>
      <Header/>
      <div className="Homepage-block">
        <Routes>
          <Route path="/" element={<ViewAllStudents/>}/>
          <Route path="/add"  element={<AddStudent />}/>
          <Route path="/edit/:id"  element={<EditStudent />}/>
          <Route path="/view/:id"  element={<ViewStudent />}/>
        </Routes>
        </div> 
      </Router>
      
    </div>
  );
}

export default App;
