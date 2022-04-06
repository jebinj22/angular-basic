import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TMDBMovieCreditsModel } from '../shared/model/movie-credits.model';
import { TMDBMovieDetailsModel } from '../shared/model/movie-details.model';
import { TMDBMovieModel } from '../shared/model/movie.model';
import { MovieModel } from './movie-model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

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
}
