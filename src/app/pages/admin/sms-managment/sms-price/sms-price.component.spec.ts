import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsPriceComponent } from './sms-price.component';

describe('SmsPriceComponent', () => {
  let component: SmsPriceComponent;
  let fixture: ComponentFixture<SmsPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
