/**
 * Created by Unknown on 6/30/2017.
 */

export class AuthInterceptor {

    $q;
    $injector;

    constructor($q, $injector) { 'ngInject';
        this.$q = $q;
        this.$injector = $injector;
    }

    request = (config) => {
        let authService = this.$injector.get('auth');
        config.headers['X-AUTH-TOKEN'] = authService.getToken();
        return config;
    };

    responseError = (rejection) => {
        if (rejection.status === 401 || rejection.status == 403) {
            let authService = this.$injector.get('auth');
            authService.logout();
        }
        return this.$q.reject(rejection);
    };
}