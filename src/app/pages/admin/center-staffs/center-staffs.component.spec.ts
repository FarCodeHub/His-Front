import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterStaffsComponent } from './center-staffs.component';

describe('CenterStaffsComponent', () => {
  let component: CenterStaffsComponent;
  let fixture: ComponentFixture<CenterStaffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterStaffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterStaffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
