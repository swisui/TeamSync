import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { TimelineComponentRoutingModule } from './timeline-component-routing.module';
import { TimelineComponentComponent } from './timeline-component.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { NewlinePipe } from './newline-as-string.pipe';
import { TimelineEventComponent } from './timeline-event/timeline-event.component';
import { TimelineTaskComponent } from './timeline-task/timeline-task.component';

@NgModule({
    declarations: [TimelineComponentComponent, NewlinePipe, TimelineEventComponent, TimelineTaskComponent],
    imports: [
        CommonModule,
        TimelineComponentRoutingModule,
        TimelineModule,
        CardModule,
        TagModule,
        ButtonModule,
        ImageModule
    ]
})
export class TimelineComponentModule {}
