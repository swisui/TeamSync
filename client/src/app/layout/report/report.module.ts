import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { ChartModule } from "primeng/chart";
import { DropdownModule } from "primeng/dropdown";
import { RippleModule } from "primeng/ripple";

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
    declarations: [ReportComponent],
    imports: [CommonModule, ReportRoutingModule, AvatarModule, ButtonModule, CardModule, ChartModule, DropdownModule, RippleModule, BadgeModule],
})
export class ReportModule {}
