import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologiesListComponent } from './radiologies-list.component';

describe('RadiologiesListComponent', () => {
  let component: RadiologiesListComponent;
  let fixture: ComponentFixture<RadiologiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologiesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
