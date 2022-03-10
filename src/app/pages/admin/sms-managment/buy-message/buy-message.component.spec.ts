import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMessageComponent } from './buy-message.component';

describe('BuyMessageComponent', () => {
  let component: BuyMessageComponent;
  let fixture: ComponentFixture<BuyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
