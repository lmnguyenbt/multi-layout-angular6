import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy, Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: '.left-panel',
    templateUrl: './aside.component.html'
})
export class AsideComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
