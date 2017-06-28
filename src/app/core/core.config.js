/**
 * Created by Unknown on 6/27/2017.
 */
export class CoreConfig {
    $locationProvider;
    $urlRouterProvider;

    constructor($locationProvider, $urlRouterProvider) {
        this.$locationProvider = $locationProvider;
        this.$urlRouterProvider = $urlRouterProvider;
        this.init();
    }

    init() {
        this.configRouting();
    }

    configRouting() {
        this.$locationProvider.html5Mode(true);
        this.$urlRouterProvider.otherwise('/');
    }
}
