import React, { Component } from 'react';
import TechnicianService from '../services/TechnicianService';

class UpdateTechnicianComponent extends Component {
    constructor(props){
        super(props)
            this.state ={
         techID: this.props.match.params.techID,
           fullName: '',
           emailID: '',
           phoneNumber:'',
           Gender: '',
           permanentaddress:'',
           communicationaddress:'',
           password:'',

           phonenumberError:'',
           emailIdError:'',
           passwordError:'',
           fullnameError:'',
           permanentAddressError:'',
           communicationaddressError:'',
           genderError:''
            }
           
            this.changeNameHandler = this.changeNameHandler.bind(this);
            this.changeEmailHandler= this.changeEmailHandler.bind(this);
            this.changeNumberHandler = this.changeNumberHandler.bind(this);
            this.changeGenderHandler = this.changeGenderHandler.bind(this);
            
            this.updateTechnician = this.updateTechnician.bind(this);
          
         }

valid(){


let fullnameError="";
let emailIdError = "";
let phonenumberError="";
let genderError="";
let permanentAddressError="";
let communicationaddressError="";
let passwordError="";

if (!this.state.fullName) {
  fullnameError = " Invalid : Name cannot be blank !";
}

if (!this.state.emailID.includes("@")) {
  emailIdError= "Invalid email";
}

if(this.state.phoneNumber.length < 10)                                                                            // ||  this.state.phoneNumber.match(letters) || this.state.phoneNumber.match(phoneno))
{
    phonenumberError=" x Invalid Phone Number !";
 }

 if(! this.state.Gender)   
 {
    genderError="Invalid : Cannot be empty";
 }

 if(! this.state.permanentaddress)   
 {
    permanentAddressError="Invalid Permanent Address: Cannot be empty";
 }

 if(! this.state.communicationaddress)   
 {
    communicationaddressError="Invalid Communication Address: Cannot be empty";
 }

 if( this.state.password.length < 5)   
  {
      
   passwordError=' x Invalid Password (Password length should be more than five)!';
                      
           
  }
 

if (emailIdError || fullnameError || phonenumberError || genderError || permanentAddressError || communicationaddressError || passwordError) {
  this.setState({ emailIdError, fullnameError, phonenumberError,genderError,permanentAddressError,communicationaddressError,passwordError });
  return false;
}
return true;
}

componentDidMount(){
    TechnicianService.getTechnicianById(this.state.techID).then( (res)=>{
  let technician = res.data;
  this.setState({
    fullName:technician.name,
    phoneNumber:technician.number,
    emailID:technician.email,
    Gender:technician.gender,
    password:technician.password,
    communicationaddress:technician.communicationAddress,
    permanentaddress:technician.permanentAddress
    
   
            
});
    });
}


updateTechnician = (e) =>{
    e.preventDefault();

     if(this.valid())
      {
         // e.preventDefault();
         let technician ={name :this.state.fullName,
                         number: this.state.phoneNumber, 
                         email : this.state.emailID , 
                         gender : this.state.Gender,
                         password:this.state.password,
                         communicationAddress:this.state.communicationaddress,
                         permanentAddress:this.state.permanentaddress  };
          console.log('Technicians =>' + JSON.stringify(technician));
           console.log(technician);

         TechnicianService.updateTechnician(technician,this.state.techID).then((res)=>{
                this.props.history.push('/update-success')
                
         });
      }


    }

changeNameHandler= (event) => {
          this.setState({fullName: event.target.value});
      }

changeEmailHandler= (event) => {
          this.setState({emailID: event.target.value});
      }

changeNumberHandler= (event) => {
          this.setState({phoneNumber: event.target.value});
      }

changeGenderHandler= (event) => {
          this.setState({Gender: event.target.value});
      }

      changePermanentAddressHandler= (event) => {
          this.setState({permanentaddress: event.target.value});
      }

      changeCommunicationAddressHandler= (event) => {
          this.setState({communicationaddress: event.target.value});
      }

      changePasswordHandler= (event) => {
          this.setState({password: event.target.value});
      }



cancel(){
  this.props.history.push('/technicians');
}





  render() {

      return (
          <div className="registration-page">
               <h2 className="text-center">UPDATE TECHNICIAN PAGE</h2>
               
               <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"lightgray"}}>
                      <div className = "card-body">
                                  <form>

                                      <div className = "form-group">
                                          <label> Full Name: </label>
                                          <input placeholder=" Full Name" name="fullName" className="form-control" 
                                              value={this.state.fullName} onChange={this.changeNameHandler}/>
                                            <p>{this.state.fullnameError}</p>
                                      </div>
                                     
                                      <div className = "form-group">
                                          <label> Email Id: </label>
                                          <input placeholder="Email Address" name="emailID" className="form-control" 
                                              value={this.state.emailID} onChange={this.changeEmailHandler}/>
                                                   <p>{this.state.emailIdError}</p> 
                                      </div>

                                      <div className = "form-group">
                                          <label> Phone Number: </label>
                                          <input placeholder="Number" name="phoneNumber" className="form-control" 
                                              value={this.state.phoneNumber} onChange={this.changeNumberHandler}/>
                                             <p>{this.state.phonenumberError}</p>
                                      </div>

                                      <div className = "form-group">
                                          <label> Gender: </label>
                                          <input placeholder="Gender" name="Gender" className="form-control" 
                                              value={this.state.Gender} onChange={this.changeGenderHandler}/>
                                            <p>{this.state.genderError}</p>
                                              
                                      </div>

                                      <div className = "form-group">
                                          <label> Permanent Address: </label>
                                          <input placeholder="Permanent Address" name="permanentaddress" className="form-control" 
                                              value={this.state.permanentaddress} onChange={this.changePermanentAddressHandler}/>
                                          <p>{this.state.permanentAddressError}</p> 
                                            
                                      </div> 

                                      <div className = "form-group">
                                          <label> Communication Address: </label>
                                          <input placeholder="Communication Address" name="communicationaddress" className="form-control" 
                                              value={this.state.communicationaddress} onChange={this.changeCommunicationAddressHandler}/>
                                             <p>{this.state.communicationaddressError}</p>  
                                             
                                      </div> 

                                      <div className = "form-group">
                                          <label> Password: </label>
                                          <input type="password" placeholder="Password" name="password" className="form-control" 
                                              value={this.state.password} onChange={this.changePasswordHandler}/>
                                                             <p>{this.state.passwordError}</p> 
                                     
                                      </div>





                                      <button className="btn btn-success" onClick={this.updateTechnician}>Save</button>
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                  </form>
                              </div>
                              </div>
</div>







           

      );
  }

}

export default UpdateTechnicianComponent;