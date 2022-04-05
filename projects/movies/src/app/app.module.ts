import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppShellModule } from './app-shell/app-shell.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  declarations: [AppComponent, MovieCardComponent],
  imports: [BrowserModule, AppShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
