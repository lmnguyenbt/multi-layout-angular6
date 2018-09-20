import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-access-denied',
    templateUrl: './page-access-denied.component.html'
})
export class PageAccessDeniedComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
