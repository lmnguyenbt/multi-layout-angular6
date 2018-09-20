import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components Module
import { LoginComponent } from 'src/app/modules/login/login.component';
import { LoginRoutingModule } from 'src/app/modules/login/login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule { }
