import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Layouts
import { LayoutComponent } from 'src/app/_layouts/layout.component';

// Components module
import { AppComponent } from './app.component';
import { AsideComponent } from 'src/app/_layouts/aside/aside.component';
import { HeaderComponent } from 'src/app/_layouts/header/header.component';
import { BreadcrumbsComponent } from 'src/app/_layouts/breadcrumbs/breadcrumbs.component';
import { AnimateToggleDirective } from 'src/app/_layouts/animate.directive';

// Routing for app
import { AppRouting } from 'src/app/app.routing';

// Service for app
import { ApiService } from 'src/app/_services/api.service';
import { JwtService } from 'src/app/_services/jwt.service';
import { AuthGuard } from 'src/app/_guards/auth.guard';

@NgModule( {
    declarations: [
        AppComponent,
        LayoutComponent,
        AsideComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        AnimateToggleDirective
    ],
    imports: [
        AppRouting,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthGuard,
        JwtService,
        ApiService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
