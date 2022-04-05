import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TiltModule } from '../tilt/tilt.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieImagePipe } from './movie-image.pipe';

@NgModule({
  declarations: [MovieImagePipe, MovieCardComponent],
  imports: [CommonModule, TiltModule],
  exports: [MovieCardComponent],
})
export class MovieModule {}
