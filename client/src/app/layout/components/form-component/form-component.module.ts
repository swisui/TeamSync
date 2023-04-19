import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { FormComponentRoutingModule } from './form-component-routing.module';
import { FormComponentComponent } from './form-component.component';

@NgModule({
    declarations: [FormComponentComponent],
    imports: [CommonModule, FormComponentRoutingModule, CardModule, InputTextModule, ButtonModule]
})
export class FormComponentModule {}
