import React from 'react';
import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Student Management</a>
                <div className="header-rightside-block">  
                    <Link to="/add">
                    <button type="button" className="btn btn-success">Add Student</button>
                    </Link>
                </div>
            </div>
      </nav>
    );
}

export default Header;