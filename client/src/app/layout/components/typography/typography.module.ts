import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";

import { TypographyRoutingModule } from './typography-routing.module';
import { TypographyComponent } from './typography.component';

@NgModule({
    declarations: [TypographyComponent],
    imports: [CommonModule, TypographyRoutingModule, CardModule, DividerModule]
})
export class TypographyModule {}
