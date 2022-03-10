import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsManagmentComponent } from './sms-managment.component';

describe('SmsManagmentComponent', () => {
  let component: SmsManagmentComponent;
  let fixture: ComponentFixture<SmsManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
