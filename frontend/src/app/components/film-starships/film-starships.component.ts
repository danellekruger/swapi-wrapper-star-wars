import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService, Starship } from '../../services/swapi.service';
import { Film } from '../../services/swapi.service';

@Component({
  selector: 'app-film-starships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-starships.component.html',
  styleUrls: ['./film-starships.component.scss']
})
export class FilmStarshipsComponent implements OnInit {
  ships: Starship[] = [];
  film: Film | null = null;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.swapi.getFilm(id).subscribe(f => this.film = f);
    this.swapi.getStarships(id).subscribe(s => this.ships = s);
  }
}
