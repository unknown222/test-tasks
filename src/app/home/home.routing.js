/**
 * Created by Unknown on 6/27/2017.
 */

export class HomeRouting {
    $stateProvider;

    constructor($stateProvider) {
        this.$stateProvider = $stateProvider;
        this.init();
    }

    init() {
        this.$stateProvider.state('home', {
            url: '/',
            component: 'homeComponent'
        });
    }

}