import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourmsComponent } from '../components/forums/forums.component';

const routes: Routes = [
    { path: 'home', component: FourmsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);