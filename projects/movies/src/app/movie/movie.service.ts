import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieModel } from './movie-model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMovie(id: string): Observable<any> {
    return null;
  }

  getMovies(category: string): Observable<{ results: MovieModel[] }> {
    return this.httpClient.get<{ results: MovieModel[] }>(
      `${environment.tmdbBaseUrl}/3/movie/${category}`,
      {
        headers: {
          Authorization: `Bearer ${environment.tmdbApiReadAccessKey}`,
        },
      }
    );
  }
}
