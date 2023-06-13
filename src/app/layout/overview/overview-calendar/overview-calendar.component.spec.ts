import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCalendarComponent } from './overview-calendar.component';

describe('OverviewCalendarComponent', () => {
    let component: OverviewCalendarComponent;
    let fixture: ComponentFixture<OverviewCalendarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OverviewCalendarComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(OverviewCalendarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
