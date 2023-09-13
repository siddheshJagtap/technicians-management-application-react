import React, { Component } from 'react';
import TechnicianService from '../services/TechnicianService';
class SearchTechnicianComponent extends Component {
    constructor(props){
        super(props)
            this.state ={
        
                fullName:'',
                phoneNumber:'',
                emailID:'',
                Gender:'',
                password:'',
                communicationaddress:'',
                permanentaddress:'',
                errorMessage:'',
                 techId:''
            }
           
            this.cancel = this.cancel.bind(this);
            this.techIdHandler = this.techIdHandler.bind(this);
            this.searchTechnician = this.searchTechnician.bind(this);
         }


searchTechnician=(e)=>{
   e.preventDefault();
    let technicianid ={techID :this.state.techId};

console.log('Technicians =>' + JSON.stringify(technicianid));
console.log(technicianid);

TechnicianService.searchTechnician(technicianid).then( (res)=>{
    let technician = res.data;
    this.setState({
       // technicians:res.data
     fullName:technician.name,
      phoneNumber:technician.number,
      emailID:technician.email,
      Gender:technician.gender,
      password:technician.password,
      communicationaddress:technician.communicationAddress,
      permanentaddress:technician.permanentAddress
    }); 
       
       console.log(technician);
      }).catch(err => { 
   
        this.setState({errorMessage: "Technician Not Found !"});
      });

    
      this.setState({errorMessage: ""});


}

techIdHandler=(event)=>{
    this.setState({techId: event.target.value});
}

cancel(){
    this.props.history.push('/technicians');
}





    render() {
        return (
            <div>
              <div className = "card col-md-6 offset-md-3 offset-md-3" style={{backgroundColor:"lightgray"}}>
                      <div className = "card-body">
                                  <form>

                                      <div className = "form-group">
                                          <label> Technician ID: </label>
                                          <input placeholder=" Technician ID" name="techId" className="form-control" 
                                              value={this.state.techId} onChange={this.techIdHandler}/>
                                            <p>{this.state.fullnameError}</p>
                                      </div>
                                     
                                      
                                              
                                      

                        
                                      <button className="btn btn-info" onClick={this.searchTechnician}>SEARCH</button>
                                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                  </form>
                                  <br></br>
                                  <div class="alert alert-danger text-center">
                                     { this.state.errorMessage &&
                                      <h5 className="error" >  { this.state.errorMessage } </h5> }
                                   </div>

                              </div>
                              </div>
                               <br></br>
                              <table className="table  table-bordered " >
                              <thead class="thead-dark">
                           <tr>
                               <th> TECHNICIANS NAME</th>
                               <th> TECHNICIANS NUMBER</th>
                               <th> TECHNICIANS EMAIL</th>
                                <th> TECHNICIANS GENDER</th>
                              <th> TECHNICIANS ADDRESS</th>
                               
                           </tr>
                       </thead>
                       <tbody>
                       <td  class="table-info"> {this.state.fullName}</td>
                       <td class="table-info"> {this.state.phoneNumber}</td>
                       <td class="table-info"> {this.state.emailID}</td>
                       <td class="table-info"> {this.state.Gender}</td>
                       <td class="table-info"> {this.state.permanentaddress}</td>          
                       </tbody>

                    </table>



</div>


        
        );
    }
}

export default SearchTechnicianComponent;
