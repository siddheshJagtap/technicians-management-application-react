//<ListTechniciansComponent />  
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListTechniciansComponent from './components/ListTechniciansComponent';
import CreateTechniciansComponent from './components/CreateTechniciansComponent';
import ViewTechniciansComponent from './components/ViewTechniciansComponent';
import RegistrationSuccess from './components/RegistrationSuccess';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import LoginSuccess from './components/LoginSuccess';
import UpdateTechnicianComponent from './components/UpdateTechnicianComponent';
import UpdateSuccess from './components/UpdateSuccess';
import SearchTechnicianComponent from './components/SearchTechnicianComponent';
import ForgotPasswordComponent from './components/ForgotPasswordComponent';
import PasswordUpdateSuccessComponent from './components/PasswordUpdateSuccessComponent';
import TechnicianDataTable from './components/TechnicianDataTable';
function App() {
  return (
    
      <Router>
        
          <HeaderComponent />
            <div className="container">
                                <Switch>
                                <Route path ="/" exact component = {HomePage}></Route>
                                <Route path ="/technicians" component = {ListTechniciansComponent}></Route>   
                                <Route path ="/add-technician" component = {CreateTechniciansComponent}></Route> 
                                <Route path ="/view-technician/:techID" component = {ViewTechniciansComponent}></Route>
                                <Route path ="/reg-success" component = {RegistrationSuccess}></Route> 
                                <Route path ="/login" component = {LoginPage}></Route>
                                <Route path ="/home-page" component = {HomePage}></Route>
                                <Route path ="/login-success" component = {LoginSuccess}></Route>
                                <Route path ="/update-technician/:techID" component = {UpdateTechnicianComponent}></Route>
                                <Route path ="/update-success" component = {UpdateSuccess}></Route>
                                <Route path ="/search-technician" component = {SearchTechnicianComponent}></Route>
                                <Route path ="/forgot-password" component = {ForgotPasswordComponent}></Route>
                                <Route path ="/password-update-success" component = {PasswordUpdateSuccessComponent}></Route>
                                <Route path ="/technician-datatable" component = {TechnicianDataTable}></Route>
                                </Switch>   
            </div>
          <FooterComponent />
        
      </Router>
  );
}

export default App;
