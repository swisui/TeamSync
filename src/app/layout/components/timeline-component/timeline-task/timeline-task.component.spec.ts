import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTaskComponent } from './timeline-task.component';

describe('TimelineTaskComponent', () => {
  let component: TimelineTaskComponent;
  let fixture: ComponentFixture<TimelineTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
