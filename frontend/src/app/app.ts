import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>SWAPI Wrapper</h1>
    <router-outlet></router-outlet>
  `,
})
export class App implements OnInit {
  private http = inject(HttpClient);
  private doc = inject(DOCUMENT);

  ngOnInit(): void {
    // pre-attach Basic header (same creds you gave curl)
    const user = 'danelle';
    const pass = 'kruger';
    const headers = { Authorization: 'Basic ' + btoa(`${user}:${pass}`) };

    this.http.get('/api/films', { headers }).subscribe({
      next: () => this.doc.body.classList.remove('auth-pending'),
      error: () => this.doc.body.classList.add('auth-pending'),
    });
  }
}
