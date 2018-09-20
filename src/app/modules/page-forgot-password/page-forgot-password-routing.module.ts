import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageForgotPasswordComponent } from 'src/app/modules/page-forgot-password/page-forgot-password.component';

const routes: Routes = [
    {
        path: '',
        component: PageForgotPasswordComponent
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class PageForgotPasswordRoutingModule {
}
