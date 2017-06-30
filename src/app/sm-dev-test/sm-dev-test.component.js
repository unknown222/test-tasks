/**
 * Created by Unknown on 6/27/2017.
 */
import './sm-dev-test.component.css'

export class SmDevTestComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./sm-dev-test.component.html');
        this.controller = SmDevTestCtrl;
        this.controllerAs = 'smDevTestCtrl';
    }
}


class SmDevTestCtrl {
    constructor() {
    }
}