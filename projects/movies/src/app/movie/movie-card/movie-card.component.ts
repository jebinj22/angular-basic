import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieModel } from '../movie-model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie: MovieModel;

  @Output() selected = new EventEmitter<MovieModel>();

  movieClicked() {
    this.selected.emit(this.movie);
  }
}
