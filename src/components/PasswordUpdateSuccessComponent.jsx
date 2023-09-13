import React, { Component } from 'react';
import successIcon from '../services/success-icon.png'
class PasswordUpdateSuccessComponent extends Component {
    constructor(props){
    super(props)
    this.directToLoginPage = this.directToLoginPage.bind(this);
    }
directToLoginPage=()=> {
    this.props.history.push('/login');
            }
render() {
    return (
        
            <div>
            
            <img src={successIcon} widht='200px' height='200px' alt="SUCCESS LOGO"/>
            <div className="message">
            <h2>PASSWORD UPDATED SUCCESSFULLY ! ! </h2>

          
            <button className="btn btn-success" onClick={this.directToLoginPage}>LOGIN </button>
             </div>
        </div>
    
    );
}

}

export default PasswordUpdateSuccessComponent;