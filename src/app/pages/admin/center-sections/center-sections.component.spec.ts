import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSectionsComponent } from './center-sections.component';

describe('CenterSectionsComponent', () => {
  let component: CenterSectionsComponent;
  let fixture: ComponentFixture<CenterSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterSectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
