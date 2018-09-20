import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy, Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
