/**
 * Created by Unknown on 6/27/2017.
 */
import './login-form-example.component.css'

export class LoginFormExampleComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./login-form-example.component.html');
        this.controller = LoginFormExampleCtrl;
        this.controllerAs = 'loginFormExampleCtrl';
    }
}


class LoginFormExampleCtrl {

    $state;
    auth;
    error = false;

    formData = {
        login: null,
        password: null
    };


    constructor($state, auth) { 'ngInject';
        this.$state = $state;
        this.auth = auth;
    }


    loginUser(formData) {
        this.auth.login(formData).then(response => {
            this.$state.go('sm-dev-test.login-success');
        }).catch(error => {
            this.error = true;
            console.error(error);
        });
    }

}