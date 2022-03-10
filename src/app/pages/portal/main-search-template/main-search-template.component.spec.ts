import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchTemplateComponent } from './main-search-template.component';

describe('MainSearchTemplateComponent', () => {
  let component: MainSearchTemplateComponent;
  let fixture: ComponentFixture<MainSearchTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSearchTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
