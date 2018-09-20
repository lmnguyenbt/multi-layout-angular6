import { Directive, HostListener } from '@angular/core';

/**
 * Allows the menu to be toggled via click.
 */
@Directive({
    selector: '[appMenuToggler]'
})
export class MenuToggleDirective {
    constructor() { }

    @HostListener('click', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('open');
    }
}

/**
 * Allows the search to be closed via click.
 */
@Directive({
    selector: '[appSearchTrigger]'
})
export class SearchTriggerDirective {
    constructor() { }

    @HostListener('click', ['$event'])
    toggleOpen($event: any) {
        $event.preventDefault();
        $event.stopPropagation();
        document.querySelector('.header-left').classList.toggle('open');
    }
}



export const AnimateToggleDirective = [
    MenuToggleDirective,
    SearchTriggerDirective
];
