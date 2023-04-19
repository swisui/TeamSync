import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { RippleModule } from "primeng/ripple";
import { SpeedDialModule } from "primeng/speeddial";
import { SplitButtonModule } from "primeng/splitbutton";
import { ToastModule } from "primeng/toast";

import { ButtonComponentRoutingModule } from './button-component-routing.module';
import { ButtonComponentComponent } from './button-component.component';


@NgModule({
  declarations: [
    ButtonComponentComponent
  ],
    imports: [
        CommonModule,
        ButtonComponentRoutingModule,
        CardModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        SplitButtonModule,
        SpeedDialModule
    ]
})
export class ButtonComponentModule { }
