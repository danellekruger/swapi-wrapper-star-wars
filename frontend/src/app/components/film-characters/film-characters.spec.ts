import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCharacters } from './film-characters';

describe('FilmCharacters', () => {
  let component: FilmCharacters;
  let fixture: ComponentFixture<FilmCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
