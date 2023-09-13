import React, { Component } from 'react';
import TechnicianService from '../services/TechnicianService';
class LoginPage extends Component {
constructor(props){
super(props)
this.state={
    techID:'',
    password:'',
    errorMessage: ''
           }
this.techIDHandler = this.techIDHandler.bind(this);
this.PasswordHandler = this.PasswordHandler.bind(this);
this.registeration = this.registeration.bind(this);
}

login = (e) =>{
    e.preventDefault();
   let technician ={
                      password:this.state.password,
                      techID :this.state.techID
                   
                  
                   };
    console.log('Technicians =>' + JSON.stringify(technician));
     console.log(technician);
    
  TechnicianService.loginTechnician(technician).then(res =>{
      
      this.props.history.push('/login-success');
}).catch(err => { 
   
    this.setState({errorMessage: "Invalid TechId or Password (Please enter valid credentials)"});
  })

}


techIDHandler(event){
    this.setState({techID: event.target.value});
}

PasswordHandler(event){
    this.setState({password: event.target.value});
}

cancel(){
    this.props.history.push('/home-page');
}

registeration(){
    this.props.history.push('/add-technician'); 
}

forgotPassword(){
    this.props.history.push('/forgot-password'); 
}



    render() {
        return (
            <div>
                
               <h2 className="text-center">LOGIN PAGE</h2> 
               <div className = "card col-md-6 offset-md-3 offset-md-3">
               <form style={{marginTop: "5px"}}>
                     
                                        <div className = "form-group">
                                            <label> TechID: </label>
                                            <input placeholder=" Technician ID" name="techID" className="form-control" 
                                                value={this.state.techID} onChange={this.techIDHandler}  />
                                        </div>
                                    

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input type= "password" placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.PasswordHandler} />
                                        </div>





                                        <button className="btn btn-success" onClick={this.login}>Login</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this) } style={{marginLeft: "10px"}}>Cancel</button>
                                       <button className="btn btn-primary" onClick={this.registeration} style={{marginLeft: "10px"}}> Register</button>
                                    </form>
                                    <br></br>
                                    <div class="alert alert-danger text-center">
                                     { this.state.errorMessage &&
                                      <h5 className="error" >  { this.state.errorMessage } </h5> }
                                   </div>
               </div>
                      <div className="forgotpassbutton">
                     <button className="btn btn-info" onClick={this.forgotPassword.bind(this) } style={{marginLeft: "10px"}}>Forgot password ?</button>    
                     </div>
            </div>
        );
    }

}
export default LoginPage;






















//call the object and then pass to the method in line no 27
//in api make naming changes dont use variabletechID make id techid and password
//also change the method name from technician2 to techLogin and also the api name from loginapi to techlogin. 










//<h2>LOGIN PAGE WILL BE SHOWN HERE</h2>
// this.setState({errorMessage: err.message});