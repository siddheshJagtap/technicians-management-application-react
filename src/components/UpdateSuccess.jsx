import React, { Component } from 'react';
import successIcon from '../services/success-icon.png'
class UpdateSuccess extends Component {
    constructor(props){
        super(props)
        this.directToList = this.directToList.bind(this);
    }
    directToList=()=> {
        this.props.history.push('/technicians');
                }

    render() {
        return (
            
                  <div>
                
                <img src={successIcon} widht='200px' height='200px' alt="SUCCESS LOGO"/>
                <div className="message">
                <h2> DATA UPDATED SUCCESSFULLY !</h2>
              
                <button className="btn btn-success" onClick={this.directToList}>VIEW LIST</button>
                 </div>
            </div>
        
            
        );
    }
}

export default UpdateSuccess;