import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewUserTaskComponent } from './overview-user-task.component';

describe('OverviewUserTaskComponent', () => {
    let component: OverviewUserTaskComponent;
    let fixture: ComponentFixture<OverviewUserTaskComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OverviewUserTaskComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(OverviewUserTaskComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
