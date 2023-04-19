import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from "primeng/card";
import { FormComponentRoutingModule } from './form-component-routing.module';
import { FormComponentComponent } from './form-component.component';

@NgModule({
    declarations: [FormComponentComponent],
    imports: [CommonModule, FormComponentRoutingModule, CardModule]
})
export class FormComponentModule {}
