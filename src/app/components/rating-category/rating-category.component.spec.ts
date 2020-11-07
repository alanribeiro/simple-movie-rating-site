import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCategoryComponent } from './rating-category.component';

describe('RatingCategoryComponent', () => {
  let component: RatingCategoryComponent;
  let fixture: ComponentFixture<RatingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
