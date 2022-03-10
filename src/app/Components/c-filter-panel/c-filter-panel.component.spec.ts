import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFilterPanelComponent } from './c-filter-panel.component';

describe('CFilterPanelComponent', () => {
  let component: CFilterPanelComponent;
  let fixture: ComponentFixture<CFilterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFilterPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
