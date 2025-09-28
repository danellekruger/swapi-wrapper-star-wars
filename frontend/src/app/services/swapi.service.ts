import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Film {
  id: number;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

@Injectable({ providedIn: 'root' })
export class SwapiService {
  constructor(private http: HttpClient) {}

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`/api/films/${id}`);
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('/api/films').pipe(
      map(films => films.sort((a, b) => a.episode_id - b.episode_id))
    );
  }

  getCharacters(filmId: number): Observable<Person[]> {
    return this.http.get<Person[]>(`/api/films/${filmId}/characters`);
  }

  getStarships(filmId: number): Observable<Starship[]> {
    return this.http.get<Starship[]>(`/api/films/${filmId}/starships`);
  }
}
