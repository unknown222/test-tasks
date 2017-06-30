/**
 * Created by Unknown on 6/30/2017.
 */
export class AuthService {

    $http;
    authToken;

    constructor($http) { 'ngInject';
        this.$http = $http;
        this.init();
    }

    init() {

    }

    getToken() {
        return this.authToken;
    }

    checkLoginStatus() {
        return this.authToken ? 'connected': 'offline';
    }


    login(params) {
        return this.$http.post('/login', params).then(response => {
            this.authToken = response.data;
            return response.data;
        }).catch(response => {
            throw response.data;
        });
    }

    logout() {
        this.authToken = undefined;
    }
}