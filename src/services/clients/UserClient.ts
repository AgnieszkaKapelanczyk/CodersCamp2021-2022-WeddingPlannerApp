import RestService from "../utils/RestService";

export default class AuthClient {
    static baseUrl = '/users';

    static activatUser() {
        return RestService.post(`${this.baseUrl}/activate`);
    };

};
