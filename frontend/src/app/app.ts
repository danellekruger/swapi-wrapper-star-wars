import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FilmsListComponent } from './components/films-list/films-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FilmsListComponent
  ],
  template: `
    <h1>SWAPI Wrapper</h1>
    <app-films-list></app-films-list>
    <router-outlet></router-outlet>
  `,
})
export class App {}
