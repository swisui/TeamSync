import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [LayoutComponent, SidebarComponent],
    imports: [CommonModule, LayoutRoutingModule, TooltipModule],
})
export class LayoutModule {}
