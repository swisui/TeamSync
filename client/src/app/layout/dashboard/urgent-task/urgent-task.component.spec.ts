import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentTaskComponent } from './urgent-task.component';

describe('UrgentTaskComponent', () => {
  let component: UrgentTaskComponent;
  let fixture: ComponentFixture<UrgentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgentTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
