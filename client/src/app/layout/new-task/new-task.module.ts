import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewTaskRoutingModule } from './new-task-routing.module';
import { NewTaskComponent } from './new-task.component';

@NgModule({
    declarations: [NewTaskComponent],
    imports: [CommonModule, NewTaskRoutingModule]
})
export class NewTaskModule {}
