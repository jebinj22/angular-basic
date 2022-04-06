import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MovieModel } from '../movie-model';

@Component({
  selector: 'movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss'],
})
export class MovieListPageComponent implements OnInit, OnDestroy {
  movies$: Observable<{ results: MovieModel[] }>;

  private sub: Subscription;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { tmdbBaseUrl: baseUrl, tmdbApiReadAccessKey: key } = environment;

    this.sub = this.activatedRoute.params.subscribe((params) => {
      this.movies$ = this.httpClient.get<{ results: MovieModel[] }>(
        `${baseUrl}/3/movie/${params.category}`,
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
