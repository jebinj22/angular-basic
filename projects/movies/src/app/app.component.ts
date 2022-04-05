import { Component } from '@angular/core';
import { MovieModel } from './movie/movie-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  movies: MovieModel[] = [
    {
      id: '100',
      title: 'Turning Red',
      poster_path: '',
      vote_average: 8,
    },
    {
      id: '100',
      title: 'Turning Red',
      poster_path: '',
      vote_average: 8,
    },
    {
      id: '100',
      title: 'Turning Red 2',
      poster_path: '',
      vote_average: 6,
    },
    {
      id: '100',
      title: 'Turning Red 2',
      poster_path: '',
      vote_average: 6,
    },
  ];

  constructor() {}
}
