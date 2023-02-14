import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AddStudent from "./Components/AddStudent";
import EditStudent from "./Components/EditStudent";
import Header from "./Components/header";
import ViewAllStudents from "./Components/ViewAllStudents";
import ViewStudent from "./Components/viewStudent";

function App() {
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
