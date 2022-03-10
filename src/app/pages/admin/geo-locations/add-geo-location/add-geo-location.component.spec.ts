import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGeoLocationComponent } from './add-geo-location.component';

describe('AddGeoLocationComponent', () => {
  let component: AddGeoLocationComponent;
  let fixture: ComponentFixture<AddGeoLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGeoLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGeoLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
