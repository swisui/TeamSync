import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';

import { TimelineComponentRoutingModule } from './timeline-component-routing.module';
import { TimelineComponentComponent } from './timeline-component.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ButtonModule } from "primeng/button";

@NgModule({
    declarations: [TimelineComponentComponent, SafeHtmlPipe],
    imports: [CommonModule, TimelineComponentRoutingModule, TimelineModule, CardModule, TagModule, ButtonModule]
})
export class TimelineComponentModule {}
