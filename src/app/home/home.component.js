/**
 * Created by Unknown on 6/27/2017.
 */
import './home.component.css'

export class HomeComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./home.component.html');
        this.controller = HomeCtrl;
        this.controllerAs = 'home';
    }
}


class HomeCtrl {
    constructor() {
    }
}