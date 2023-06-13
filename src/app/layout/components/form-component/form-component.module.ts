import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormComponentRoutingModule } from './form-component-routing.module';
import { FormComponentComponent } from './form-component.component';

@NgModule({
    declarations: [FormComponentComponent],
    imports: [
        CommonModule,
        FormComponentRoutingModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        InputTextareaModule,
        DropdownModule,
        ReactiveFormsModule,
        CheckboxModule
    ]
})
export class FormComponentModule {}
