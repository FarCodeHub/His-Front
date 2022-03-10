import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLabResultsComponent } from './patient-lab-results.component';

describe('PatientLabResultsComponent', () => {
  let component: PatientLabResultsComponent;
  let fixture: ComponentFixture<PatientLabResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientLabResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLabResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
