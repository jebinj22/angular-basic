import { Component } from '@angular/core';
import { MovieModel } from './movie-card/movie-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movie: MovieModel = {
    id: '100',
    title: 'Turning Red',
    poster_path: '/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg',
    vote_average: 8,
  };

  constructor() {}

  navToDetail(movie: MovieModel): void {
    console.log('selected', movie);
    console.log(movie);
  }
}
