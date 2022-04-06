import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppShellModule } from './app-shell/app-shell.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';
import { NotFoundPageModule } from './not-found-page/not-found-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppShellModule,
    AppRoutingModule,
    NotFoundPageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
