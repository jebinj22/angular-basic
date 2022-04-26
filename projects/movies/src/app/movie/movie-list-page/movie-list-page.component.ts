import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, interval, map, Observable, of, Subject, Subscription, switchMap, takeUntil, tap } from 'rxjs';
import { MovieModel } from '../movie-model';
import { MovieService } from '../movie.service';
import { RxEffects } from '@rx-angular/state/effects';

@Component({
  selector: 'movie-list-page',
  template: `
    <input name="search">

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
  providers: [RxEffects]
})
export class MovieListPageComponent {
  movies$: Observable<{ results: MovieModel[] }> = this.activatedRoute.params.pipe(
    switchMap(params => this.movieService.getMovieList(params.category))
  );

  /*
    state$ = new BehaviorSubject({ list: [1, 2, 43] });
    selection$ = this.state$.pipe(
      tap(console.log),
      // filter(v => v !== undefined),
      //  distinctUntilKeyChanged('list'),
      map((s) => ({ list: s.list, count: s.list.length }))
      //      shareReplay(1)
    );
  */


  constructor(
    private rxEffects: RxEffects,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    /*const trigger$ = activatedRoute.params;
    const effect = (params) => {
      // no side effect!!
      this.movies$ = this.movieService.getMovieList(params.category);
    };
    this.rxEffects.register(trigger$.pipe(
      switchMap(params => this.movieService.getMovieList(params.category))
    ));
    */
    /*
     selection$.subscribe((v) => console.log('new', v));
  selection$.subscribe((v) => console.log('new', v));
  selection$.subscribe((v) => console.log('new', v));
  selection$.subscribe((v) => console.log('new', v));
  selection$.subscribe((v) => console.log('new', v));

  selection$.subscribe((v) => console.log('new', v));
  selection$.subscribe((v) => console.log('new', v));
  selection$.subscribe((v) => console.log('new', v));
    * */

  }

}
