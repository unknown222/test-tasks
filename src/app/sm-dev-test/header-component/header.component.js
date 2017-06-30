/**
 * Created by Unknown on 6/27/2017.
 */
import './header.component.css'

export class HeaderComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./header.component.html');
        this.controller = HeaderCtrl;
        this.controllerAs = 'headerCtrl';
    }
}


class HeaderCtrl {
    auth;
    constructor(auth) { 'ngInject';
        this.auth = auth;
    }

}