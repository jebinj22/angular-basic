import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailGridModule } from '../../ui/component/detail-grid/detail-grid.module';
import { SvgIconModule } from '../../ui/component/icons/icon.module';
import { StarRatingModule } from '../../ui/pattern/star-rating/star-rating.module';
import { MovieModule } from '../movie.module';
import { MovieDetailPageComponent } from './movie-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailPageComponent,
  },
];

@NgModule({
  declarations: [MovieDetailPageComponent],
  imports: [
    RouterModule.forChild(routes),
    SvgIconModule,
    CommonModule,
    MovieModule,
    StarRatingModule,
    DetailGridModule,
  ],
})
export class MovieDetailPageModule {}
