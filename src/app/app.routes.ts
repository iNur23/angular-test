import { Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: HeroesListComponent
    },
    {
        path: ':id',
        component: HeroPageComponent,
        canActivate: [AuthGuardService],
    }
];
