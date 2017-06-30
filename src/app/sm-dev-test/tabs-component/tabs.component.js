/**
 * Created by Unknown on 6/27/2017.
 */
import './tabs.component.css'

export class TabsComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./tabs.component.html');
        this.controller = TabsCtrl;
        this.controllerAs = 'tabsCtrl';
    }
}


class TabsCtrl {
    constructor() {
    }
}