import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService, Person, Film } from '../../services/swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.scss']
})
export class FilmCharactersComponent implements OnInit {
  film: Film | null = null;
  people$!: Observable<Person[]>;   // Observable for async pipe

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.people$ = this.swapi.getCharacters(id); // <-- Observable
    this.swapi.getFilm(id).subscribe(f => this.film = f);
  }
}
