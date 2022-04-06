import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SvgIconModule } from '../ui/component/icons/icon.module';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [RouterModule, SvgIconModule],
  exports: [],
})
export class NotFoundPageModule {}
