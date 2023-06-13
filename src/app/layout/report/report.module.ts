import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';
import { ChartModule } from '../../shared/modules/chart/chart.module';
import { ProjectCategoryComponent } from './project-category/project-category.component';
import { ProjectProgressComponent } from './project-progress/project-progress.component';
import { ProjectRevenueComponent } from './project-revenue/project-revenue.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { TotalSaleComponent } from './total-sale/total-sale.component';
import { InputTextModule } from 'primeng/inputtext';
import { MainBreadcrumbModule } from '../../shared/modules/main-breadcrumb/main-breadcrumb.module';

@NgModule({
    declarations: [
        ReportComponent,
        ProjectProgressComponent,
        ProjectRevenueComponent,
        TotalSaleComponent,
        ProjectCategoryComponent
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        AvatarModule,
        ButtonModule,
        CardModule,
        DropdownModule,
        RippleModule,
        BadgeModule,
        NgApexchartsModule,
        FormsModule,
        ChartModule,
        InputTextModule,
        MainBreadcrumbModule
    ]
})
export class ReportModule {}
