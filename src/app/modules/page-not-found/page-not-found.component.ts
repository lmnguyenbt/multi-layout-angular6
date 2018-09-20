import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
