/**
 * Created by Unknown on 6/27/2017.
 */
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ui from '../ui/ui.module';
import auth from './auth/auth.module';
import mockData from './mock-data/mock-data.module';
import {CoreConfig} from "./core.config";
import typeahead from "angular-ui-bootstrap/src/typeahead";
import 'bootstrap/dist/css/bootstrap.css';

const MODULE_NAME = 'core';

const CoreModule = angular.module(MODULE_NAME, [uirouter, auth, ui, typeahead, mockData]);

CoreModule.config(($locationProvider, $urlRouterProvider) => new CoreConfig($locationProvider, $urlRouterProvider));

export default MODULE_NAME;