import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';

@NgModule({
    declarations: [OverviewComponent],
    imports: [CommonModule, OverviewRoutingModule]
})
export class OverviewModule {}
