import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiltModule } from '../tilt/tilt.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieImagePipe } from './movie-image.pipe';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieImagePipe, MovieCardComponent, MovieListComponent],
  imports: [CommonModule, TiltModule],
  exports: [MovieListComponent],
})
export class MovieModule {}
