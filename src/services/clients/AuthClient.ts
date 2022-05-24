import { LoginData } from './../../components/Dialog/loginDialog';
import { RegistrationData } from "components/Dialog/rejestracjEmail";
import RestService from "../utils/RestService";
export default class AuthClient {
    static baseUrl = '/auth';
 
    static registerUser(data: RegistrationData) {
        return RestService.post(`${this.baseUrl}/register`, data);
    };

    static loginUser(data: LoginData) {
        return RestService.post(`${this.baseUrl}/login`, data);
    }; 

};
