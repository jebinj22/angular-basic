import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImage',
})
export class MovieImagePipe implements PipeTransform {
  transform(value: string): string {
    // if value => url + value
    // else fallback

    if (value) {
      return `https://image.tmdb.org/t/p/w300/${value}`;
    }
    return '/assets/images/no_poster_available.jpg';
  }
}
