import { Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { HeroPageComponent } from 'pages/hero-page';
import { HeroesPageComponent } from 'pages/heroes-page';
import { LoginPageComponent } from 'pages/login-page';

export const routes: Routes = [
    {
        path: 'heroes',
        component: HeroesPageComponent
    },
    {
        path: 'heroes/:id',
        component: HeroPageComponent,
        // canActivate: [AuthGuardService],
    },
    {
        path: 'login',
        component: LoginPageComponent
    }
];
