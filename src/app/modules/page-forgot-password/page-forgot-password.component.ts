import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-page-forgot-password',
    templateUrl: './page-forgot-password.component.html'
})
export class PageForgotPasswordComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
