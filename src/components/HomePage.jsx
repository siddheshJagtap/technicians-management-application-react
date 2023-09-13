import React, { Component } from 'react';
import homepageIcon from '../services/homepage.png'
class HomePage extends Component {
    constructor(props){
        super(props)
       this.registrationPage = this.registrationPage.bind(this);
       this.loginPage = this.loginPage.bind(this);
    }
     

    registrationPage(){
        this.props.history.push('/add-technician');
    }


    loginPage(){
        this.props.history.push('/login');
    }
    render() {
        return (
            <div>
                 <div className="homepagebuttons">
                                <button className="btn btn-primary" onClick={this.registrationPage}> REGISTER NOW</button>
                              
                              <button style={{marginLeft:"10px"}} className="btn btn-primary" onClick={this.loginPage}> LOGIN</button> 
                              <h2>TECHNICIAN MANAGEMENT HOMEPAGE</h2>
                                </div>
                                
                                <div className = "homepage">
                 <img  src={homepageIcon} widht='200px' height='300px' alt="HOMEPAGE"/>
                 </div>
            </div>
        );
    }
}

export default HomePage;