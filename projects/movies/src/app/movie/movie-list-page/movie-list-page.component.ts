import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  interval,
  map,
  merge,
  Observable,
  of,
  Subject,
  Subscription,
  switchMap,
  takeUntil,
  tap
} from 'rxjs';
import { MovieModel } from '../movie-model';
import { MovieService } from '../movie.service';
import { RxEffects } from '@rx-angular/state/effects';
import { RxState } from '@rx-angular/state';

@Component({
  selector: 'movie-list-page',
  template: `
    <input name="search" (input)="searchString.next({category: $event?.target?.value})">

    <ng-container *ngIf="(movies$ | async) as movieResponse; else: loader">

      <movie-list
        *ngIf="movieResponse.results?.length > 0; else: elseTmpl"
        [movies]="movieResponse.results">
      </movie-list>

      <ng-template #elseTmpl>
        <div>Sorry, nothing found bra!</div>
      </ng-template>


    </ng-container>


    <ng-template #loader>
      <div class="loader"></div>
    </ng-template>
  `,
  providers: [RxEffects, RxState]
})
export class MovieListPageComponent {
  searchString = new Subject<{category: string}>();
  movies$: Observable<MovieModel[]> = this.state.select('list');

  constructor(
    private state: RxState<{ list: MovieModel[]  }>,
    private rxEffects: RxEffects,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {

    this.state.connect('list', this.movieService.list$)

    this.rxEffects.register(
      // trigger
      merge(
        this.activatedRoute.params,
        this.searchString.asObservable()
      ),
      // side effect
      params => this.movieService.fetchMovieList(params.category)
    );

    this.activatedRoute.params
      .subscribe(params => this.movieService.fetchMovieList(params.category))
  }

}
