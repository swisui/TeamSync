import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
    declarations: [SignupComponent],
    imports: [CommonModule, SignupRoutingModule, ButtonModule, CardModule, DividerModule, InputTextModule]
})
export class SignupModule {}
