import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Module
import { PageForgotPasswordComponent } from 'src/app/modules/page-forgot-password/page-forgot-password.component';
import { PageForgotPasswordRoutingModule } from 'src/app/modules/page-forgot-password/page-forgot-password-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PageForgotPasswordRoutingModule
    ],
    declarations: [
        PageForgotPasswordComponent
    ]
})
export class PageForgotPasswordModule { }
