/**
 * Created by Unknown on 6/30/2017.
 */
import angular from "angular";
import {AuthService} from "./auth.service";
import {AuthConfig} from "./auth.config";
import {AuthInterceptor} from "./auth.interceptor";


const MODULE_NAME = 'auth';

const AuthModule = angular.module(MODULE_NAME, []);
AuthModule.service('authInterceptor', AuthInterceptor);
AuthModule.service('auth', AuthService);
AuthModule.config(($httpProvider) => new AuthConfig($httpProvider));

export default MODULE_NAME;