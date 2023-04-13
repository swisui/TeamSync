import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import {AvatarModule} from "primeng/avatar";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ChartModule} from "primeng/chart";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
    declarations: [OverviewComponent],
    imports: [CommonModule, OverviewRoutingModule, AvatarModule, InputTextModule, CardModule, ButtonModule, RippleModule, ChartModule, DropdownModule],
})
export class OverviewModule {}
