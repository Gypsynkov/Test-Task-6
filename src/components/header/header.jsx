import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import '../header/header.css'

export default class Header extends Component {


    render(){
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Staff List Aplication</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/Header'>Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/List'>List</Link>
            </li>
    
          </ul>
          
        </div>
      </nav>
      </div>
    )
    
    }
    }