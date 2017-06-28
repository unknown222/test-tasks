/**
 * Created by Unknown on 6/27/2017.
 */
import angular from 'angular';
import {SimpleFormFlowComponent} from "./simple-form-flow.component";
import {SimpleFormFlowRouting} from "./simple-form-flow.routing";
import {FormCarouselComponent} from "./form-carousel/form-carousel.component";

const MODULE_NAME = 'simple-form-flow';

const HomeModule = angular.module(MODULE_NAME, []);

HomeModule.component('sffComponent', new SimpleFormFlowComponent());
HomeModule.component('formCarousel', new FormCarouselComponent());
HomeModule.config(($stateProvider) => new SimpleFormFlowRouting($stateProvider));

export default MODULE_NAME;