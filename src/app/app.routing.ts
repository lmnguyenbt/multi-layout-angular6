import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LayoutComponent } from 'src/app/_layouts/layout.component';

// Auth
import { AuthGuard } from 'src/app/_guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
    {
        path: 'page-not-found',
        loadChildren: './modules/page-not-found/page-not-found.module#PageNotFoundModule',
    },
    {
        path: 'access-denied',
        loadChildren: './modules/page-access-denied/page-access-denied.module#PageAccessDeniedModule'
    },
    {
        path: 'forgot-password',
        loadChildren: './modules/page-forgot-password/page-forgot-password.module#PageForgotPasswordModule'
    },
    {
        path: 'admin',
        component: LayoutComponent,
        //canActivate: [ AuthGuard ],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
            },
            /*{
                path: 'settings',
                loadChildren: './modules/settings/settings.module#SettingsModule',
            },
            {
                path: 'advanced',
                loadChildren: './modules/advanced/advanced.module#AdvancedModule',
            },
            {
                path: 'reports',
                loadChildren: './modules/reports/reports.module#ReportsModule',
            }*/
        ]
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
    }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes, { enableTracing: false, useHash: true } ) ],
    exports: [ RouterModule ]
} )

export class AppRouting {
}
