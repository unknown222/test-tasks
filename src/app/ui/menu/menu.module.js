/**
 * Created by Unknown on 6/30/2017.
 */
import angular from "angular";
import {MenuComponent} from "./menu.component";
import {MenuToggleDirective} from "./menu-toggle.directive";
import {MenuContentDirective} from "./menu-content.directive";

const MODULE_NAME = 'menu';

const MenuModule = angular.module(MODULE_NAME, []);

MenuModule.directive('menuContent', () => new MenuContentDirective());
MenuModule.directive('menuToggle', () => new MenuToggleDirective());
MenuModule.component('menuComponent', new MenuComponent());


export default MODULE_NAME;