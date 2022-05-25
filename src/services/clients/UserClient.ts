import RestService from "../utils/RestService";

export default class UserClient {
    static baseUrl = '/users';

    static activateUser(token: string) {
        return RestService.get(`${this.baseUrl}/active`,
            {
              headers: {
                "Authorization": `Bearer ${token}`,
              }
            }
          );
    };

};
