/**
 * Created by Unknown on 6/30/2017.
 */
import {AuthInterceptor} from "./auth.interceptor";
export class AuthConfig {
    $httpProvider;

    constructor($httpProvider) {
        'ngInject';
        this.$httpProvider = $httpProvider;
        this.init();
    }

    init() {
        this.$httpProvider.interceptors.push('authInterceptor');
    }

}