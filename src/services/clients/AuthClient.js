import RestService from "../utils/RestService";

export default class AuthClient {
    static baseUrl = '/auth';

    static registerUser(data) {
        return RestService.post(`${this.baseUrl}/register`, data);
    };

    static loginUser(data) {
        return RestService.post(`${this.baseUrl}/login`, data);
    };

    static activationUser() {
        return RestService.get(`${this.baseUrl}/`);
    };

};
