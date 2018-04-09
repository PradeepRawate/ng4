import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'workspace', component: ServersComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const AppRouterModule = RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        );

