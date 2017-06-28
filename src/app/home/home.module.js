/**
 * Created by Unknown on 6/27/2017.
 */
import angular from 'angular';
import {HomeComponent} from "./home.component";
import {HomeRouting} from "./home.routing";


const MODULE_NAME = 'home';

const HomeModule = angular.module(MODULE_NAME, []);

HomeModule.component('homeComponent', new HomeComponent());
HomeModule.config(($stateProvider) => new HomeRouting($stateProvider));

export default MODULE_NAME;