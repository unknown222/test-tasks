/**
 * Created by Unknown on 6/27/2017.
 */

export class SmDevTestRouting {
    $stateProvider;
    $urlRouterProvider;

    constructor($stateProvider, $urlRouterProvider) {
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.init();
    }

    init() {

        this.$urlRouterProvider.when('/sm-dev-test', '/sm-dev-test/menu-example');

        this.$stateProvider
            .state('sm-dev-test', {
                url: '/sm-dev-test',
                component: 'smDevTestComponent',
                abstract: true
            })
            .state('sm-dev-test.menu-example', {
                url: '/menu-example',
                component: 'menuExampleComponent'
            })
            .state('sm-dev-test.login-form-example', {
                url: '/login-form-example',
                component: 'loginFormExampleComponent'
            })
            .state('sm-dev-test.login-success', {
                url: '/login-success',
                component: 'loginSuccess'
            });
    }

}