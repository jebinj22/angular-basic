import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import { MovieModel } from './movie/movie-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies: MovieModel[];

  movies$ = this.httpClient.get<{ results: MovieModel[] }>(
    `${environment.tmdbBaseUrl}/3/movie/popular`,
    {
      headers: {
        Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`,
      },
    }
  );

  private sub: Subscription | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const baseUrl = environment.tmdbBaseUrl;
    const key = environment.tmdbApiReadAccessKey;
    this.movies$ = this.httpClient.get<{ results: MovieModel[] }>(
      `${baseUrl}/3/movie/popular`,
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      }
    );
  }
}
