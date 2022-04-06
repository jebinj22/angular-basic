import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'list/:category',
    loadChildren: () =>
      import('./movie/movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule
      ),
  },
  {
    path: '',
    redirectTo: '/list/popular',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
