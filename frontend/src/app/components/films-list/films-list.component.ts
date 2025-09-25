import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwapiService, Film } from '../../services/swapi.service';

@Component({
  selector: 'app-films-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];

  constructor(private swapi: SwapiService) {}

  ngOnInit(): void {
    this.swapi.getFilms().subscribe({
      next: data => this.films = data,
      error: err => console.error('Failed to load films', err)
    });
  }
}
