import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BModalComponent } from './b-modal.component';

describe('BModalComponent', () => {
  let component: BModalComponent;
  let fixture: ComponentFixture<BModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
