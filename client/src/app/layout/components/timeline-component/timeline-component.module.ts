import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';

import { TimelineComponentRoutingModule } from './timeline-component-routing.module';
import { TimelineComponentComponent } from './timeline-component.component';

@NgModule({
    declarations: [TimelineComponentComponent],
    imports: [CommonModule, TimelineComponentRoutingModule, TimelineModule, CardModule, TagModule]
})
export class TimelineComponentModule {}
