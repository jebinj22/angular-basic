import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  distinctUntilKeyChanged,
  filter,
  map,
  Observable,
  shareReplay,
  Subject,
  switchMap,
  tap, withLatestFrom
} from 'rxjs';
import { environment } from '../../environments/environment';
import { TMDBMovieCreditsModel } from '../shared/model/movie-credits.model';
import { TMDBMovieDetailsModel } from '../shared/model/movie-details.model';
import { TMDBMovieModel } from '../shared/model/movie.model';
import { MovieModel } from './movie-model';
import { RxEffects } from '@rx-angular/state/effects';
import { RxState, selectSlice } from '@rx-angular/state';


interface Global {
  list: MovieModel[],
  test: string
}

@Injectable({
  providedIn: 'root'
})
export class MovieService extends RxState<Global> {
  // initialState = { list: [], test: '' };
  // rxEf = new RxEffects({} as any);
  fetchTrigger$ = new Subject<string>();


  state$ = this.select();
  list$ = this.select('list');
  listAndSize$ = this.select(
    map(({list, test}) => ({
      list,
      size: list.length
    }))
  );
/*
  _list$: Observable<MovieModel[]> = this.stateSubject.pipe(
    filter(v => v !== undefined),
    distinctUntilKeyChanged('list'),
    map(s => s.list),
    shareReplay(1)
  );
*/

  constructor(private httpClient: HttpClient) {
    super();

    //this.set({list: []});
    //this.set(({ list }) => ({list: list.concat([])}));
    console.log(this.get()) // initialState

    const listUpdates$ = this.fetchTrigger$.pipe(
      switchMap(v => this._fetchMovieList(v)),
      map(({results}) => results)
    );
    this.connect('list', listUpdates$);
    /*
    this.rxEf.register(
      listUpdates$,
      (results) => this.stateSubject.next({ list: this.stateSubject.getValue().list.concat(results) })
    );
*/
  }


  getMovieCredits(id: string): Observable<TMDBMovieCreditsModel> {
    return this.httpClient.get<TMDBMovieCreditsModel>(
      `${environment.tmdbBaseUrl}/3/movie/${id}/credits`
    );
  }

  getMovieRecommendations(id: string): Observable<{ results: MovieModel[] }> {
    return this.httpClient.get<{ results: MovieModel[] }>(
      `${environment.tmdbBaseUrl}/3/movie/${id}/recommendations`
    );
  }

  getMovieById(id: string): Observable<TMDBMovieDetailsModel> {
    return this.httpClient.get<TMDBMovieDetailsModel>(
      `${environment.tmdbBaseUrl}/3/movie/${id}`
    );
  }

  getMovieList(category: string): Observable<{ results: MovieModel[] }> {
    const { tmdbBaseUrl: baseUrl } = environment;

    return this.httpClient.get<{ results: MovieModel[] }>(
      `${baseUrl}/3/movie/${category}`
    );
  }


  _fetchMovieList(category: string) {
    const { tmdbBaseUrl: baseUrl } = environment;
    return this.httpClient.get<{ results: MovieModel[] }>(
      `${baseUrl}/3/movie/${category}`
    );
  }

  fetchMovieList(category: string): void {
    this.fetchTrigger$.next(category);
  }
}
