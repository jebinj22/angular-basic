import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListPageComponent } from './movie/movie-list-page/movie-list-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'list/:category',
    loadChildren: () => {
      return import('./movie/movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule
      );
    },
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () => {
      return import('./not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      );
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
