import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpacialityComponent } from './add-spaciality.component';

describe('AddSpacialityComponent', () => {
  let component: AddSpacialityComponent;
  let fixture: ComponentFixture<AddSpacialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpacialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpacialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
