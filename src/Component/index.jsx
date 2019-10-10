import React, { Component } from 'react'
import Header from './header.jsx'
import './Style.css'
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../image/login1.png'
import Footer from './footer.jsx'


export default class index extends Component {
    
 
    render() {
        return (
            
            <div>
                <Header />
                <div>                     
                <form className="login">
                <div className="image">                               
                    <img src={Logo} alt="logo" height="10%" width="30%"/>                
                </div>
                <br></br>
                {/* <label>Username</label><br></br> */}
                <input type="text" name="name" className="txtid" placeholder="Username"></input><br></br><br></br>     
                {/* <label>Password</label> <br></br>                  */}
                <input type="password" name="type" className="txtid" placeholder="Password"></input><br></br><br></br>
                &emsp;<input type="checkbox" className="checkbox"/>Remind me                 
                <br></br>              
                <button className="save_but" type="submit"><i className="fa fa-sign-in" >
                &nbsp;Login</i></button> 
                <br></br><br></br>
                <p className="new" id="click">Sign Up for new account</p><br></br>
                <h6>Forgot Your Password</h6>
                                 
                {/* <input type="reset" Value="Reset" className="reset_but"/>  */}
                </form>
                </div>
                <Footer />
            </div>
        )
    }
}
