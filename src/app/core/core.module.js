/**
 * Created by Unknown on 6/27/2017.
 */
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import {CoreConfig} from "./core.config";
import typeahead from "angular-ui-bootstrap/src/typeahead";
import 'bootstrap/dist/css/bootstrap.css';


const MODULE_NAME = 'core';

const CoreModule = angular.module(MODULE_NAME, [uirouter, typeahead]);

CoreModule.config(($locationProvider, $urlRouterProvider) => new CoreConfig($locationProvider, $urlRouterProvider));

export default MODULE_NAME;