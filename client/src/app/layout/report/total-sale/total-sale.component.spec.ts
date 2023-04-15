import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSaleComponent } from './total-sale.component';

describe('TotalWorkingHourComponent', () => {
    let component: TotalSaleComponent;
    let fixture: ComponentFixture<TotalSaleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TotalSaleComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TotalSaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
