import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAttachFileComponent } from './patient-attach-file.component';

describe('PatientAtachFileComponent', () => {
  let component: PatientAttachFileComponent;
  let fixture: ComponentFixture<PatientAttachFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAttachFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAttachFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
