import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent } from 'src/app/modules/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from 'src/app/modules/page-not-found/page-not-found-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PageNotFoundRoutingModule
    ],
    declarations: [
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule { }
