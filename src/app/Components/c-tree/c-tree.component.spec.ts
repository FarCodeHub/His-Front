import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTreeComponent } from './c-tree.component';

describe('CTreeComponent', () => {
  let component: CTreeComponent;
  let fixture: ComponentFixture<CTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
