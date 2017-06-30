/**
 * Created by Unknown on 6/30/2017.
 */


export class MockDataRun {

    $httpBackend;

    constructor($httpBackend) { 'ngInject';
        this.$httpBackend = $httpBackend;
        this.init();
    }

    init() {
        this.$httpBackend.whenPOST('/login').respond((method, url, data) => {
            let jsonData = JSON.parse(data);
            if (jsonData.login === 'test' && jsonData.password === 'test') {
                return [200, "randomGeneratedToken", {}];
            }
            return [403, "NOT_EXIST", {}];
        });

        this.$httpBackend.whenGET(/[\s\S]*/).passThrough();
        this.$httpBackend.whenPOST(/[\s\S]*/).passThrough();
    }
}