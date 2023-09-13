import React, { Component } from 'react';
import TechnicianService from '../services/TechnicianService';
class ForgotPasswordComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            techID:'',
            password:'',
            confirmPassword:'',
            errorMessage: '',
            passwordError:'',
            techIdError:'',
            emptyPasswordError:'',
            emptyConfirmPasswordError:'',
            passwordLengthError:''
                   }
        this.techIDHandler = this.techIDHandler.bind(this);
        this.PasswordHandler = this.PasswordHandler.bind(this);
        this.ConfirmPasswordHandler = this.ConfirmPasswordHandler.bind(this);
        }



        valid(){

            let passwordError="";
            let techIdError="";
            let emptyPasswordError="";
            let emptyConfirmPasswordError="";
            let passwordLengthError="";

            if (!this.state.techID ) {
                techIdError = " Invalid : Technician ID cannot be blank !";
              }
          

              if (!this.state.password){
                 emptyPasswordError="Invalid : Cannot be empty !"
              }

           if(! this.state.confirmPassword){
                  emptyConfirmPasswordError="Invalid : Cannot be empty !"
           }
             

           if( this.state.password.length < 5 ){
            passwordLengthError="Invalid :Length cannot be less than 5 !"
            }

             if(this.state.password !== this.state.confirmPassword)   
              {
                  
               passwordError=' x Passwords dont match !';
                                  
                       
              }
             
          
            if (techIdError ||emptyPasswordError || emptyConfirmPasswordError|| passwordLengthError ||passwordError) {
              this.setState({techIdError,emptyPasswordError,emptyConfirmPasswordError,passwordLengthError,passwordError });
              return false;
            }

            return true;
           }
          

     
        login = (e) =>{

            e.preventDefault();

            if(this.valid())
            {
                this.setState({techIdError:'',emptyPasswordError:'',emptyConfirmPasswordError:'',passwordLengthError:'',passwordError:''});
            
           let technician ={
                              password:this.state.password,
                              techID :this.state.techID
                           
                          
                           };
            console.log('Technicians =>' + JSON.stringify(technician));
             console.log(technician);
            
          TechnicianService.forgotPassword(technician).then(res =>{
              
              this.props.history.push('/password-update-success');
        })
       .catch(err => { 
           
           this.setState({errorMessage: "Invalid TechId -Technician not found"});
         })
        this.setState({errorMessage: ""});
            }

           
        }
        
        
        techIDHandler(event){
            this.setState({techID: event.target.value});
        }
        
        PasswordHandler(event){
            this.setState({password: event.target.value});
        }

        ConfirmPasswordHandler(event){
            this.setState({confirmPassword: event.target.value});

        }
        cancel(){
            this.props.history.push('/login');
        }
        
        
        
        
        
            render() {
                return (
                    <div>
                        
                       <h2 className="text-center">FORGOT PASSWORD PAGE</h2> 
                       <div className = "card col-md-6 offset-md-3 offset-md-3">
                       <form style={{marginTop: "5px"}}>
                             
                                                <div className = "form-group">
                                                    <label> TechID: </label>
                                                    <input placeholder=" Technician ID" name="techID" className="form-control" 
                                                        value={this.state.techID} onChange={this.techIDHandler}  />
                                                       <p>{this.state.techIdError}</p>  
                                                </div>
                                            
        
                                                <div className = "form-group">
                                                    <label> Enter New Password: </label>
                                                    <input type= "password" placeholder=" New Password" name="password" className="form-control" 
                                                        value={this.state.password} onChange={this.PasswordHandler} />
                                                          
                                                         <p>{this.state.emptyPasswordError}</p>  
                                                         <p>{this.state.passwordLengthError}</p>  
                                                </div>

                                                <div className = "form-group">
                                                    <label> Confirm New Password: </label>
                                                    <input type= "password" placeholder="Confirm Password" name="confirmPassword" className="form-control" 
                                                        value={this.state.confirmPassword} onChange={this.ConfirmPasswordHandler} />
                                                       <p>{this.state.emptyConfirmPasswordError}</p> 
                                                      <p>{this.state.passwordError}</p> 
                                                        
                                                </div>
        
        
        
        
        
                                                <button className="btn btn-success" onClick={this.login}>Submit</button>
                                                <button className="btn btn-danger" onClick={this.cancel.bind(this) } style={{marginLeft: "10px"}}>Cancel</button>
                                               
                                            </form>
                                            <br></br>
                                            <div class="alert alert-danger text-center">
                                             { this.state.errorMessage &&
                                              <h5 className="error" >  { this.state.errorMessage } </h5> }
                                           </div>
                       </div>

                  
                            
                       
                    </div>
                );
            }
        




   
}

export default ForgotPasswordComponent;
//<p>{this.state.passwordError}</p> 