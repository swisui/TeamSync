import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBreadcrumbComponent } from './main-breadcrumb.component';

describe('MainBreadcrumbComponent', () => {
    let component: MainBreadcrumbComponent;
    let fixture: ComponentFixture<MainBreadcrumbComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MainBreadcrumbComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(MainBreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
