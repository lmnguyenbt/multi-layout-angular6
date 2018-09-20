import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from 'src/app/modules/home/home.component';
import { HomeRoutingModule } from 'src/app/modules/home/home-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
