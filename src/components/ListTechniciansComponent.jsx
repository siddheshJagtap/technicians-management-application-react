import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit,faTrash,faEye,faSearch,faSignOutAlt,faTable} from '@fortawesome/free-solid-svg-icons'

import TechnicianService from '../services/TechnicianService';

class ListTechniciansComponent extends Component {
   constructor(props){
       super(props)

       this.state = {
           technicians: []
       }
      this.addTechnician = this.addTechnician.bind(this);
      this.deleteTechnician = this.deleteTechnician.bind(this);
      this.logoutTechnician = this.logoutTechnician.bind(this);
      this.updateTechnician = this.updateTechnician.bind(this);
      this.searchTechnician = this.searchTechnician.bind(this);
      this.datatable = this.datatable.bind(this);
   }
    

   deleteTechnician(techID){

   TechnicianService.deleteTechnician(techID).then(res =>{
  //  this.props.history.push('/reg-success');This shows a message when you click on delete.maybe we can add confirm buttton here.
  // alert("ARE YOU SURE YOU WANT TO DELETE THIS RECORD ?");
  this.setState({technicians: this.state.technicians.filter(technician => technician.techID !== techID)});
  console.log("Deleted successfully");
});  
   }
   
   viewTechnician(techID){
      // this.props.history.push('/view-technician/$(techID)');
       this.props.history.push(`/view-technician/${techID}`);
   }
   updateTechnician(techID){
    this.props.history.push(`/update-technician/${techID}`);
   }
   


   
   componentDidMount(){
       TechnicianService.getTechnicians().then((res)=>{
           this.setState({technicians:res.data});
       });//the data gets stored in the technicians array
   }



   //addTechnician event handler method called on onclick event
    addTechnician(){
        this.props.history.push('/add-technician');
    }
    logoutTechnician(){
        this.props.history.push('/login');
    }
    searchTechnician(){
        this.props.history.push('/search-technician');
    }
    datatable(){
        this.props.history.push('/technician-datatable');  
    }

    render() {
        return (
            <div >
                    <h2 className="text-center">TECHNICIANS LIST     </h2>
                           <div className = "logoutbutton">
                                <button className="btn btn-primary btn-sm "  onClick={this.datatable}><FontAwesomeIcon icon={faTable} color="white"/> DATA-TABLE</button>
                                <button className="btn btn-primary btn-sm " style={{marginLeft:"5px"}} onClick={this.searchTechnician}><FontAwesomeIcon icon={faSearch} color="white"/> SEARCH</button> 
                                <button className="btn btn-primary btn-sm"  style={{marginLeft:"5px"}} onClick={this.logoutTechnician}><FontAwesomeIcon icon={faSignOutAlt} color="white"/> LOGOUT</button>
                            </div>
                  
                <div className="row">
                            
                            
                            <div className="container">
                    <table className="table table-striped table-bordered" >
                       <thead>
                           <tr>
                               <th> TECHNICIANS NAME</th>
                               <th> TECHNICIANS NUMBER</th>
                               <th> TECHNICIANS EMAIL</th>
                                <th> TECHNICIANS GENDER</th>
                                <th> TECHNICIANS ADDRESS</th>
                               <th> ACTIONS</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.technicians.map(
                                   technician =>
                                   <tr key = {technician.techID}>
                                        <td> {technician.name}</td>
                                        <td> {technician.number}</td>
                                        <td> {technician.email}</td> 
                                         <td> {technician.gender}</td>
                                         <td> {technician.permanentAddress}</td>
                                        <td width="13%"> 
                                            <button  onClick={ () => 
                                            {if(window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS RECORD ?'))
                                            {return this.deleteTechnician(technician.techID);
                                            }}} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} color="white"/></button>
                                              
                                            <button style={{marginLeft:"5px"}} onClick={ () => {
                                                   return this.viewTechnician(technician.techID);
                                               }} className="btn btn-secondary btn-sm"><FontAwesomeIcon icon={faEye} color="white"/></button>


                                             <button  style={{marginLeft:"5px"}} onClick={ () => {
                                                   return this.updateTechnician(technician.techID);
                                               }} className="btn btn-info btn-sm"> <FontAwesomeIcon icon={faEdit} color="white"/></button>
                                            
                                        </td>
                                   </tr>
                               )
                           }
                       </tbody>

                    </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTechniciansComponent;

/*
<div className = "addbutton">
   <button className="btn btn-primary" onClick={this.addTechnician}> Add Technician</button>
</div>
onClick={() => {if(window.confirm('Are you sure to delete this record?')){ this.deleteHandler(item.id)}
*/ //style={{paddingLeft:"0px"}}> <td> {technician.permanentAddress}</td>    <th> TECHNICIANS ADDRESS</th>