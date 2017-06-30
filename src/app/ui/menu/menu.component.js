/**
 * Created by Unknown on 6/27/2017.
 */

export class MenuComponent {
    controller;
    controllerAs;
    template;
    transclude;

    constructor() {
        this.template = '<ng-transclude></ng-transclude>';
        this.controller = MenuCtrl;
        this.controllerAs = 'menuCtrl';
        this.transclude = true;
    }
}


class MenuCtrl {

    isOpen;
    elemRef;
    $document;

    constructor($document) {  'ngInject';
        this.isOpen = false;
        this.$document = $document;
    }

    registerContentElemRef(element) {
        element[0].style.display = 'none';
        this.elemRef = element;
    }

    toggleOpen(event) {
        this.isOpen = !this.isOpen;
        if(this.isOpen) this.showContent(event);
        if(!this.isOpen) this.hideContent();
    }

    showContent(event) {
        event.stopPropagation();

        this.elemRef[0].style.display = 'block';
        this.elemRef[0].style.left = event.clientX + 'px';
        this.elemRef[0].style.top = event.clientY + 'px';

        this.$document.bind('click', this.onDocumentClick.bind(this));
    }

    onDocumentClick(event) {
        this.hideContent();
        this.$document.unbind('click');

    }

    hideContent() {
        this.isOpen = false;
        this.elemRef[0].style.display = 'none';
    }
}