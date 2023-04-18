import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarCommonModule } from "angular-calendar";
import { AvatarModule } from "primeng/avatar";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';


@NgModule({
  declarations: [
    ComponentsComponent
  ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        AvatarModule,
        ButtonModule,
        CalendarCommonModule,
        RippleModule
    ]
})
export class ComponentsModule { }
