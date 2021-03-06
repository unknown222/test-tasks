/**
 * Created by Unknown on 6/27/2017.
 */
import './form-carousel.component.css'

export class FormCarouselComponent {
    controller;
    controllerAs;
    template;

    constructor() {
        this.template = require('./form-carousel.component.html');
        this.controller = FormCarouselCtrl;
        this.controllerAs = 'sffForm';
    }
}


class FormCarouselCtrl {

    $location;
    $scope;
    $http;
    $sce;

    steps = ['step1', 'step2', 'step3'];
    currentStep;

    formData = {};


    constructor($location, $scope, $http, $sce) { 'ngInject';
        this.$location = $location;
        this.$scope = $scope;
        this.$http = $http;
        this.$sce = $sce;
        this.init();
    }

    init() {
        this.registerLocationControls();
        this.gerRemoteData(this.formData);
    }

    gerRemoteData(dataObject) {
        this.$http.get('data/sample-form-data.json')
            .then(response => {
                Object.assign(dataObject, response.data);
            })
            .catch(console.error);
    }

    registerLocationControls() {
        this.$scope.$watch(() => {
            return this.$location.hash()
        }, (value) => {
            if (this.steps.indexOf(value) > -1) {

                if (this.$scope.form.$valid) {
                    this.currentStep = value;
                } else {
                    this.$location.hash(this.currentStep);
                }

            } else {
                this.currentStep = this.steps[0];
            }
        });

        this.$scope.$watch(() => {
            return this.currentStep;
        }, (value) => {
            if (this.steps.indexOf(value > -1)) {
                this.$location.hash(this.currentStep);
            }
        });
    }

    next() {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1]
    }

    back() {
        this.currentStep = this.steps[this.steps.indexOf(this.currentStep) - 1]
    }

    submit(data) {
        console.log("SUBMIT");
        this.$http.post('www.test.url.com', data)
            .then(console.log)
            .catch(console.error);
    }

    getCities(value) {

        let url = "http://gd.geobytes.com/AutoCompleteCity?&sort=size&q=" + value;
        let trustedUrl = this.$sce.trustAsResourceUrl(url);
        return this.$http.jsonp(trustedUrl)
            .then(response => {
                return response.data.filter(elem => {
                    return elem.length > 3;
                }).slice(0, 5);
            })
    }

    validateAge(inn) {
        let innValue = inn.$viewValue;
        if (innValue.length === 10) {
            let days = innValue.slice(0, 5);
            let birthDate = new Date(1900, 0, 0);
            birthDate.setDate(birthDate.getDate() + Number(days));
            if (this.calculateAge(birthDate) >= 21) {
                inn.$setValidity("age", true);
            } else {
                inn.$setValidity("age", false);
            }
        }
    }

    calculateAge(birthday) {
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}