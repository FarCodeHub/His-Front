import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSmsPriceComponent } from './add-sms-price.component';

describe('AddSmsPriceComponent', () => {
  let component: AddSmsPriceComponent;
  let fixture: ComponentFixture<AddSmsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSmsPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSmsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
