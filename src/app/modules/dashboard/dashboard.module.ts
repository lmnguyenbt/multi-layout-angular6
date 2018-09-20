import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DashboardRoutingModule } from 'src/app/modules/dashboard/dashboard-routing.module';
import { DashboardService } from 'src/app/modules/dashboard/dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        DashboardService
    ]
})
export class DashboardModule { }
