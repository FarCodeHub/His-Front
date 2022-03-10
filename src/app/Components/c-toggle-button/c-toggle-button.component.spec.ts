import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToggleButtonComponent } from './c-toggle-button.component';

describe('CToggleButtonComponent', () => {
  let component: CToggleButtonComponent;
  let fixture: ComponentFixture<CToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToggleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
