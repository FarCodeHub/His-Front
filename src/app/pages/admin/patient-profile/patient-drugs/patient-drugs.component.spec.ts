import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDrugsComponent } from './patient-drugs.component';

describe('PatientDrugsComponent', () => {
  let component: PatientDrugsComponent;
  let fixture: ComponentFixture<PatientDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDrugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
