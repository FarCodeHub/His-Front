import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVisitListComponent } from './profile-visit-list.component';

describe('ProfileVisitListComponent', () => {
  let component: ProfileVisitListComponent;
  let fixture: ComponentFixture<ProfileVisitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileVisitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVisitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
