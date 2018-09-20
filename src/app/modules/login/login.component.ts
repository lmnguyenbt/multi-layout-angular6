import {
    Compiler, Component, Injector, NgModule, NgModuleRef,
    ViewContainerRef, OnInit, ViewChild, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
