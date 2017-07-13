import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{HomepageComponent} from '../components/homepage/homepage.component';

const routes: Routes = [
    { path: '', component: HomepageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);