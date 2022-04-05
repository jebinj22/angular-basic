import { Component } from '@angular/core';
import { MovieModel } from './movie/movie-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movie: MovieModel = {
    id: '100',
    title: 'Turning Red',
    poster_path: '',
    vote_average: 8,
  };

  constructor() {}

  navToDetail(movie: MovieModel): void {
    console.log('selected', movie);
    console.log(movie);
  }
}
