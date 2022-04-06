import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailPageComponent } from './movie-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: MovieDetailPageComponent,
  },
];

@NgModule({
  declarations: [MovieDetailPageComponent],
  imports: [RouterModule.forChild(routes)],
})
export class MovieDetailPageModule {}
