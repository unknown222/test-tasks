/**
 * Created by Unknown on 6/27/2017.
 */
import angular from 'angular';
import {SmDevTestComponent} from "./sm-dev-test.component";
import {SmDevTestRouting} from "./sm-dev-test.routing";
import {MenuExampleComponent} from "./menu-example/menu-example.component";
import {LoginFormExampleComponent} from "./login-form-example/login-form-example.component";
import {HeaderComponent} from "./header-component/header.component";
import {SideNavComponent} from "./side-nav-component/side-nav.component";
import {TabsComponent} from "./tabs-component/tabs.component";
import {LoginSuccessComponent} from "./login-success/login-success.component";


const MODULE_NAME = 'smDevTest';

const SmDevTestModule = angular.module(MODULE_NAME, []);

SmDevTestModule.component('headerComponent', new HeaderComponent());
SmDevTestModule.component('sideNavComponent', new SideNavComponent());
SmDevTestModule.component('tabsComponent', new TabsComponent());
SmDevTestModule.component('smDevTestComponent', new SmDevTestComponent());
SmDevTestModule.component('menuExampleComponent', new MenuExampleComponent());
SmDevTestModule.component('loginFormExampleComponent', new LoginFormExampleComponent());
SmDevTestModule.component('loginSuccess', new LoginSuccessComponent());
SmDevTestModule.config(($stateProvider, $urlRouterProvider) => new SmDevTestRouting($stateProvider, $urlRouterProvider));

export default MODULE_NAME;