import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwapiService, Starship } from '../../services/swapi.service';
import { Film } from '../../services/swapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-starships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './film-starships.component.html',
  styleUrls: ['./film-starships.component.scss']
})
export class FilmStarshipsComponent implements OnInit {
  film: Film | null = null;
  ships$!: Observable<Starship[]>;

  constructor(private route: ActivatedRoute, private swapi: SwapiService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ships$ = this.swapi.getStarships(id);
    this.swapi.getFilm(id).subscribe(f => this.film = f);
  }
}
