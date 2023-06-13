import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseStatisticComponent } from './expense-statistic.component';

describe('ExpenseStatisticComponent', () => {
    let component: ExpenseStatisticComponent;
    let fixture: ComponentFixture<ExpenseStatisticComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExpenseStatisticComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ExpenseStatisticComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
