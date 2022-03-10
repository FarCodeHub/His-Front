import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMultiInputComponent } from './c-multi-input.component';

describe('CMultiInputComponent', () => {
  let component: CMultiInputComponent;
  let fixture: ComponentFixture<CMultiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMultiInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMultiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
