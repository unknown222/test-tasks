/**
 * Created by Unknown on 6/27/2017.
 */
import './menu-example.component.css'

export class MenuExampleComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./menu-example.component.html');
        this.controller = MenuExampleCtrl;
        this.controllerAs = 'menuExampleCtrl';
    }
}


class MenuExampleCtrl {
    constructor() {
    }
}