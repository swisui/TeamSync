import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "primeng/card";
import { TabViewModule } from "primeng/tabview";

import { TabRoutingModule } from './tab-routing.module';
import { TabComponent } from './tab.component';

@NgModule({
    declarations: [TabComponent],
    imports: [CommonModule, TabRoutingModule, CardModule, TabViewModule]
})
export class TabModule {}
