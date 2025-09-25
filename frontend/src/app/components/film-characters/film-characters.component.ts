import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService, Person } from '../../services/swapi.service';

@Component({
  selector: 'app-film-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-characters.component.html',
  styleUrls: ['./film-characters.component.scss']
})
export class FilmCharactersComponent implements OnInit {
  people: Person[] = [];
  filmId = 0;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.filmId = Number(this.route.snapshot.paramMap.get('id'));
    this.swapi.getCharacters(this.filmId).subscribe(data => this.people = data);
  }
}
