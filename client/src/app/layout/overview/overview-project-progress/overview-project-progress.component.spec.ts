import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewProjectProgressComponent } from './overview-project-progress.component';

describe('OverviewProjectProgressComponent', () => {
    let component: OverviewProjectProgressComponent;
    let fixture: ComponentFixture<OverviewProjectProgressComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [OverviewProjectProgressComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(OverviewProjectProgressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
