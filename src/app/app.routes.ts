import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const rootRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const RootRouting = RouterModule.forRoot(rootRoutes);
