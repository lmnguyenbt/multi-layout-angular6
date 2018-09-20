import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Module
import { PageAccessDeniedComponent } from 'src/app/modules/page-access-denied/page-access-denied.component';
import { PageAccessDeniedRoutingModule } from 'src/app/modules/page-access-denied/page-access-denied-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PageAccessDeniedRoutingModule
    ],
    declarations: [
        PageAccessDeniedComponent
    ]
})
export class PageAccessDeniedModule { }
