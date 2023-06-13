import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBreadcrumbComponent } from './main-breadcrumb.component';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    declarations: [MainBreadcrumbComponent],
    exports: [MainBreadcrumbComponent],
    imports: [CommonModule, AvatarModule, ButtonModule, InputTextModule]
})
export class MainBreadcrumbModule {}
