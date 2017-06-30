/**
 * Created by Unknown on 6/27/2017.
 */
import './side-nav.component.css'

export class SideNavComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./side-nav.component.html');
        this.controller = SideNavCtrl;
        this.controllerAs = 'sideNavCtrl';
    }
}


class SideNavCtrl {
    constructor() {
    }
}