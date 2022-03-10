import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToastComponent } from './c-toast.component';

describe('CToastComponent', () => {
  let component: CToastComponent;
  let fixture: ComponentFixture<CToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
