import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CalculadoraComponent } from '../../calculadora/calculadora.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'calculadora', component: CalculadoraComponent },
];
