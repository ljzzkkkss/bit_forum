import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';


import { HomepageComponent } from '../components/homepage/homepage.component';
import { NavbarModule } from './navbar.module';
import { routing } from '../routing/homepage.routing';
import { HttpService } from "../service/http.service";


@NgModule({
    imports: [
        routing,
        CommonModule,
        NavbarModule
    ],
    declarations: [
        HomepageComponent
    ],
    providers: [
        HttpService
    ]
})
export class HomepageModule {}