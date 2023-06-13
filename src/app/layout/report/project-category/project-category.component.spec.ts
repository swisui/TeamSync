import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCategoryComponent } from './project-category.component';

describe('ProjectCategoryComponent', () => {
    let component: ProjectCategoryComponent;
    let fixture: ComponentFixture<ProjectCategoryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectCategoryComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ProjectCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
