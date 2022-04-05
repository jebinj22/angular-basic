import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppShellModule } from './app-shell/app-shell.module';
import { AppComponent } from './app.component';
import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppShellModule, MovieModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
