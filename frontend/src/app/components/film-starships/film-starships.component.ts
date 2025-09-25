import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService, Starship } from '../../services/swapi.service';

@Component({
  selector: 'app-film-starships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-starships.component.html',
  styleUrls: ['./film-starships.component.scss']
})
export class FilmStarshipsComponent implements OnInit {
  ships: Starship[] = [];
  filmId = 0;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    this.filmId = Number(this.route.snapshot.paramMap.get('id'));
    this.swapi.getStarships(this.filmId).subscribe(data => this.ships = data);
  }
}
