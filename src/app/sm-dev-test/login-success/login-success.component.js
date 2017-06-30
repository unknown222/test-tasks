/**
 * Created by Unknown on 6/27/2017.
 */
import './login-success.component.css'

export class LoginSuccessComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./login-success.component.html');
        this.controller = LoginSuccessCtrl;
        this.controllerAs = 'loginSuccessCtrl';
    }
}


class LoginSuccessCtrl {
    constructor() {
    }
}