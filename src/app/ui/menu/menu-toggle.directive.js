/**
 * Created by Unknown on 6/30/2017.
 */
export class MenuToggleDirective {
    scope;
    restrict;
    require;

    constructor() {
        this.scope = {};
        this.restrict = 'A';
        this.require = "^menuComponent";
    }

    link(scope, element, attrs, controller) {
        scope.isOpen = () => {
            return controller.isOpen;
        };
        scope.toggle = (event) => {
            controller.toggleOpen(event);
            scope.$apply();
        };

        element.on('click', scope.toggle);
    }
}