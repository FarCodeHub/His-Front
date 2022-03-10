import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDigitInputComponent } from './c-digit-input.component';

describe('CDigitInputComponent', () => {
  let component: CDigitInputComponent;
  let fixture: ComponentFixture<CDigitInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDigitInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CDigitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
