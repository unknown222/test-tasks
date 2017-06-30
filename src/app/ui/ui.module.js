/**
 * Created by Unknown on 6/27/2017.
 */
import angular from "angular";
import menu from './menu/menu.module'


const MODULE_NAME = 'ui';

const UiModule = angular.module(MODULE_NAME, [menu]);

export default MODULE_NAME;