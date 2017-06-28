/**
 * Created by Unknown on 6/27/2017.
 */

export class SimpleFormFlowRouting {
    $stateProvider;

    constructor($stateProvider) {
        this.$stateProvider = $stateProvider;
        this.init();
    }

    init() {
        this.$stateProvider.state('sff', {
            url: '/sff',
            component: 'sffComponent'
        });
    }

}