import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';


import { FourmsComponent } from '../components/forums/forums.component';
import { NavbarModule } from './navbar.module';
import { routing } from '../routing/forum.routing';
import { HttpService } from "../service/http.service";
import "froala-editor/js/froala_editor.pkgd.min.js";


@NgModule({
    imports: [
        routing,
        CommonModule,
        NavbarModule
    ],
    declarations: [
        FourmsComponent,

    ],
    providers: [
        HttpService
    ]
})
export class ForumModule {}