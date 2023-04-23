import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorItemsComponent } from './.component';

describe('sectorItemsComponent', () => {
  let component: SectorItemsComponent;
  let fixture: ComponentFixture<SectorItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
