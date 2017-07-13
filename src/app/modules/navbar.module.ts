import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, } from '@angular/router';


import { NavbarComponent } from '../components/navbar/navbar.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent
    ],
    declarations: [
        NavbarComponent
    ]
})
export class NavbarModule {}