import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppShellModule } from './app-shell/app-shell.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppShellModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
