import axios from 'axios'

const TECHNICIAN_API_BASE_URL ="http://localhost:8080/api/v1/technician"; 
class TechnicianService{
            getTechnicians(){
                return axios.get(TECHNICIAN_API_BASE_URL);
            }

           createTechnician(technician){
                return axios.post('http://localhost:8080/api/v1/technicians',technician);
            }

            getTechnicianById(techniciantechID){
             return axios.get('http://localhost:8080/api/v1/technician/'+  techniciantechID);
            }

            updateTechnician(technician,techniciantechID){
                return axios.put('http://localhost:8080/api/v1/updateTechnician/'+ techniciantechID,technician)
            }

            loginTechnician(technician){
                return axios.post('http://localhost:8080/api/v1/technician-login',technician);
                
            }

            searchTechnician(technician){
                return axios.post('http://localhost:8080/api/v1/search-technician',technician);
            }


            forgotPassword(technician){
                return axios.put('http://localhost:8080/api/v1/forgot-password',technician);
            
            }


            
            deleteTechnician(techniciantechID){
                  return axios.delete('http://localhost:8080/api/v1/techniciand/'+  techniciantechID);
                }
                




}
export default new TechnicianService()


















//we create Technician Service class and export object of the class

//deleteTechnician(techniciantechID){
//   return axios.delete(TECHNICIAN_API_BASE_URL + '/' + techniciantechID);
//}
