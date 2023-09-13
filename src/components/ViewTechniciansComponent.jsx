import React, { Component } from 'react';
import TechnicianService from '../services/TechnicianService';
class ViewTechniciansComponent extends Component {
  constructor(props){
      super(props)

      this.state ={
        techID:this.props.match.params.techID,
       // technicians: []  
    //------    techID: this.props.match.parms.techID
    //techID: this.props.match.params.techId,
    technician: {}
      }
      this.homePage = this.homePage.bind(this);
  }

  homePage(){
    this.props.history.push('/technicians');
        }      

  componentDidMount(){
    TechnicianService.getTechnicianById(this.state.techID).then( res => {
        this.setState({technician: res.data});
    });
  }
  
    render() {
        return (
            <div>
                <h2 className="text-center">TECHNICIANS DETAILS !</h2>
                <div className = "card col-md-6 offset-md-3" style={{backgroundColor:"lightgray"}} >
                    
                    <div className = "card-body">
                      <div className="viewdata">
                        <div className = "row">
                            <label> Technicician Name          : </label> 
                            <div> { this.state.technician.name }</div>
                        </div>

                        <div className = "row">
                            <label> Technician Phone Number       :  </label>
                            <div> { this.state.technician.number }</div>
                        </div>

                        <div className = "row">
                            <label> Technician EmailID     : </label>
                            <div> { this.state.technician.email }</div>
                        </div>
                        <div className = "row">
                            <label> Technician Gender     : </label>
                            <div> { this.state.technician.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Technician Communication Address     : </label>
                            <div> { this.state.technician.communicationAddress }</div>
                        </div>
                      
                        <div className = "row">
                            <label> Technician Permanent Address            : </label>
                            <div> { this.state.technician.permanentAddress }</div>
                        </div>
                        </div>
                       

                    </div>

                </div>





              
                <div className="viewhomepage">
                <button className="btn btn-primary " onClick={this.homePage}> HOME PAGE (LIST)</button>
                </div>
            </div>
        );
    }
}

export default ViewTechniciansComponent;
//<h3 className = "text-center"> View Details</h3>