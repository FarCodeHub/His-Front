import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPhoneInputComponent } from './c-phone-input.component';

describe('CPhoneInputComponent', () => {
  let component: CPhoneInputComponent;
  let fixture: ComponentFixture<CPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPhoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
