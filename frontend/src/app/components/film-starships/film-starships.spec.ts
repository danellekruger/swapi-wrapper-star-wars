import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmStarships } from './film-starships';

describe('FilmStarships', () => {
  let component: FilmStarships;
  let fixture: ComponentFixture<FilmStarships>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmStarships]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmStarships);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
