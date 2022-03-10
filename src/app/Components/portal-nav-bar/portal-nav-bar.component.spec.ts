import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNavBarComponent } from './portal-nav-bar.component';

describe('PortalNavBarComponent', () => {
  let component: PortalNavBarComponent;
  let fixture: ComponentFixture<PortalNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
