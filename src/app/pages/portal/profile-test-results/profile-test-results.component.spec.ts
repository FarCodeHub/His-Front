import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTestResultsComponent } from './profile-test-results.component';

describe('ProfileTestResultsComponent', () => {
  let component: ProfileTestResultsComponent;
  let fixture: ComponentFixture<ProfileTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTestResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
