/**
 * Created by Unknown on 6/27/2017.
 */
import './simple-form-flow.component.css'

export class SimpleFormFlowComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./simple-form-flow.component.html');
        this.controller = SimpleFormFlowCtrl;
        this.controllerAs = 'sff';
    }
}


class SimpleFormFlowCtrl {
    constructor() {
    }
}