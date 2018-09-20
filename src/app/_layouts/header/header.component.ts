import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy, Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: '.header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
