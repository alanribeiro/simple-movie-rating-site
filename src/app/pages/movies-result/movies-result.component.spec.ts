import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesResultComponent } from './movies-result.component';

describe('MoviesResultComponent', () => {
  let component: MoviesResultComponent;
  let fixture: ComponentFixture<MoviesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
