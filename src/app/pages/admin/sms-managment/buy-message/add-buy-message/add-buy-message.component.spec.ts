import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyMessageComponent } from './add-buy-message.component';

describe('AddBuyMessageComponent', () => {
  let component: AddBuyMessageComponent;
  let fixture: ComponentFixture<AddBuyMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuyMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
