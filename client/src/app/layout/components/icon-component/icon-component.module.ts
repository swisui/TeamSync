import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { IconComponentRoutingModule } from './icon-component-routing.module';
import { IconComponentComponent } from './icon-component.component';
import { IconFilterPipe } from './icon-filter.pipe';

@NgModule({
    declarations: [IconComponentComponent, IconFilterPipe],
    imports: [CommonModule, IconComponentRoutingModule, InputTextareaModule, InputTextModule, CardModule]
})
export class IconComponentModule {}
