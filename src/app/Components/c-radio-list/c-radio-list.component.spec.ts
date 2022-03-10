import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRadioListComponent } from './c-radio-list.component';

describe('CRadioListComponent', () => {
  let component: CRadioListComponent;
  let fixture: ComponentFixture<CRadioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRadioListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRadioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
