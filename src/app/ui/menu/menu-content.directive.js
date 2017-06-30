/**
 * Created by Unknown on 6/30/2017.
 */
export class MenuContentDirective {
    scope;
    template;
    restrict;
    require;

    constructor() {
        this.scope = {};
        this.restrict = 'A';
        this.require = "^menuComponent";
    }

    link(scope, element, attrs, controller) {
        controller.registerContentElemRef(element);
    }
}