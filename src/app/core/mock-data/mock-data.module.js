/**
 * Created by Unknown on 6/27/2017.
 */
import angular from "angular";
import mockE2E from "angular-mocks/ngMockE2E";
import {MockDataRun} from "./mock-data.run";

const MODULE_NAME = 'mockData';

const MockDataModule = angular.module(MODULE_NAME, [mockE2E]);

MockDataModule.run(($httpBackend) => new MockDataRun($httpBackend));

export default MODULE_NAME;