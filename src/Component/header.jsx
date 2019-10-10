import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Style.css'
import 'font-awesome/css/font-awesome.min.css';

export default class header extends Component {
    render() {
        return (
            <div>
                <header>
                <div className="menu">
                       <button className="menu_btn">Home</button>
                       <button className="menu_btn">Project</button>
                       <button className="menu_btn">Defect</button>
                       <button className="menu_btn">Employee</button>
                </div> 
                </header>
            </div>
        )
    }
}
