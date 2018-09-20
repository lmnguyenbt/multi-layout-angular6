import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageAccessDeniedComponent } from 'src/app/modules/page-access-denied/page-access-denied.component';

const routes: Routes = [
    {
        path: '',
        component: PageAccessDeniedComponent
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class PageAccessDeniedRoutingModule {
}
