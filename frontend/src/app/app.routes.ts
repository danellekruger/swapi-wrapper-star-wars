import { Routes } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmCharactersComponent } from './components/film-characters/film-characters.component';
import { FilmStarshipsComponent } from './components/film-starships/film-starships.component';

export const routes: Routes = [
  { path: '', component: FilmsListComponent },
  { path: 'films/:id/characters', component: FilmCharactersComponent },
  { path: 'films/:id/starships', component: FilmStarshipsComponent },
  { path: '**', redirectTo: '' }
];
