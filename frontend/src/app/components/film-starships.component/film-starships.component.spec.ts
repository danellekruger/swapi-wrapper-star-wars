import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmStarshipsComponent } from './film-starships.component';

describe('FilmStarshipsComponent', () => {
  let component: FilmStarshipsComponent;
  let fixture: ComponentFixture<FilmStarshipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmStarshipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmStarshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
