import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserResolveService } from './user/user-resolve.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'workspace', component: ServersComponent },
    {
        path: 'user',
        component: UserComponent,
        resolve: {
            users: UserResolveService
        }
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const AppRouterModule = RouterModule.forRoot(
    appRoutes,
    { enableTracing: false }
);

