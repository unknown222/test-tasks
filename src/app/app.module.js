import angular from 'angular';
import core from './core/core.module'
import home from './home/home.module'
import simpleFormFlow from './simple-form-flow/simple-form-flow.module'
import smDevTest from './sm-dev-test/sm-dev-test.module'
import './app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME,
    [core, home, simpleFormFlow, smDevTest]);

export default MODULE_NAME;