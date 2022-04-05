import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModel } from '../movie-model';

type BooleanInputType = string | boolean | null | undefined;

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: MovieModel;

  @Input()
  set disabled(value: BooleanInputType) {
    if (value === '' || value === true) {
      // disabled
    }
  }

  @Output() selected = new EventEmitter<MovieModel>();

  constructor() {}

  ngOnInit(): void {}

  movieClicked() {
    this.selected.emit(this.movie);
  }
}
