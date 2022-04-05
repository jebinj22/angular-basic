import { Component, Input } from '@angular/core';
import { MovieModel } from '../movie-model';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movies: MovieModel[];

  navToDetail(movie: MovieModel): void {
    console.log('selected', movie);
    console.log(movie);
  }
}
