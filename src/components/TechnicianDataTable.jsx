import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import TechnicianService from '../services/TechnicianService';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
//import 'primeflex/primeflex.css';

class TechnicianDataTable  extends Component {

    constructor(props)
    {
        super(props)

        this.state = {  
                       technicians: [],
        
                      
                         
                    }     
      
       // this.setCustomers = null;
       // this.customers = null;
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.actionBodyTemplate=this.actionBodyTemplate.bind(this);
        this.dt = null;
      
         this.deleteTechnician = this.deleteTechnician.bind(this);
         this.vT=this.vT.bind(this);
    }

    vT=(techID)=>
    {
    
        this.props.history.push(`/view-technician/${techID}`);
        
    }
    deleteTechnician(techID)
    {
        this.props.history.push(`/view-technician/${techID}`);
     
    }

    updateTechnician(techID)
    {
        this.props.history.push(`/update-technician/${techID}`);
    }





        componentDidMount()
    {
        TechnicianService.getTechnicians().then((res) => 
        {
           
                this.setState({ technicians: res.data});
               
        });
    }

  
    nameBodyTemplate=(technicians) =>
    {

       
       return (
            <React.Fragment>
                <span className="p-column-title"></span>
                {technicians.name}  
            </React.Fragment>
            ); 
      

    }

    emailBodyTemplate(technicians)
    {
        return (
            
            <React.Fragment>
                <span className="p-column-title"> </span>
                {technicians.email}
            </React.Fragment>
            
        );


    }

    numberBodyTemplate(technicians)
    {
        return (
            
            <React.Fragment>
                <span className="p-column-title"></span>
                {technicians.number}
            </React.Fragment>
            
        );

    }

    genderBodyTemplate(technicians)
    {
        return (
            
            <React.Fragment>
                <span className="p-column-title"></span>
                {technicians.gender}
            </React.Fragment>
            
        );

    }

    addressBodyTemplate(technicians)
    {
        return (
            
            <React.Fragment>
                <span className="p-column-title"></span>
                {technicians.permanentAddress}
            </React.Fragment>
            
        );
    }

    actionBodyTemplate(technicians)
    {
        return (
            <React.Fragment>
               
               <Button icon="pi pi-eye" className=" p-button-info p-mr-2 " onClick={ ()=>
                                                this.vT(technicians.techID)
                                               }

            
                />
                <Button icon="pi pi-pencil" className=" p-button-secondary p-mr-2"  onClick={ () => 
                                                this.updateTechnician(technicians.techID)
                                               } style={{marginLeft:"3px"}} />

                <Button icon="pi pi-trash" className=" p-button-danger"  onClick={ () => 
                                            {if(window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS RECORD ?'))
                                            return this.deleteTechnician(technicians.techID)
                                            }} style={{marginLeft:"3px"}}/>

                                         
            </React.Fragment>
        );
    }


   

        
            
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Technician List</h2>
                <div className="datatable-filter-demo">
                <div className="card">
                <DataTable ref={this.dt} value={this.state.technicians} paginator rows={5}
                    header={this.header} className="p-datatable-gridlines p-datatable-sm"
                    globalFilter={this.globalFilter} emptyMessage="No customers found.">

                    <Column field="name" header="NAME" body={this.nameBodyTemplate} filter filterPlaceholder="Search by name" headerStyle={{ width: '10rem'}}/>
                    <Column field="email" header="EMAIL-ID" body={this.emailBodyTemplate} filter filterPlaceholder="Search by email" headerStyle={{ width: '13rem' }}/>
                    <Column field="number" header="NUMBER" body={this.numberBodyTemplate} filter filterPlaceholder="Search by number"  />
                    <Column field="gender" header="GENDER" body={this.genderBodyTemplate} filter filterPlaceholder="Search by gender" />
                    <Column field="permanentAddress" header="ADDRESS" body={this.addressBodyTemplate} filter filterPlaceholder="Search by address" headerStyle={{ width: '14rem' }}/>
                    <Column  header="ACTIONS" body={this.actionBodyTemplate} headerStyle={{width:'10rem'}}/>
                </DataTable>
                </div>
                </div>
            </div>
        );
    }
}

export default TechnicianDataTable;
                