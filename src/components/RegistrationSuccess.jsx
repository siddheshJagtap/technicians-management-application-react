import React, { Component } from 'react';
import successIcon from '../services/success-icon.png'



class RegistrationSuccess extends Component {
    constructor(props){
        super(props)
        this.directToLogin = this.directToLogin.bind(this);
            }

 directToLogin=(e)=>{
           this.props.history.push('/login');
                   }

    render() {
        return (
            <div>
                
                <img  src={successIcon} widht='200px' height='200px' alt="SUCCESS LOGO"/>
                <div className="message">
                <h2>REGISTRATION SUCCESSFULL ! !</h2>
               
                <button className="btn btn-success" onClick={this.directToLogin}>Login</button>
                 </div>
            </div>
        );
    }
}

export default RegistrationSuccess;