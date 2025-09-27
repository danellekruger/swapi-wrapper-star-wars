import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService, Person, Film } from '../../services/swapi.service';

@Component({
  selector: 'app-film-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.scss']
})
export class FilmCharactersComponent implements OnInit {
  people: Person[] = [];
  film: Film | null = null;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.swapi.getFilm(id).subscribe(f => this.film = f);
    this.swapi.getCharacters(id).subscribe(p => this.people = p);
  }
}
