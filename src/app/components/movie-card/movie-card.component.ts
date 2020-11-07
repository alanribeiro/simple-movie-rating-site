import { Component, Input } from '@angular/core';

import { MoviesService } from "../../services/movies-service/movies.service";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movie: any;

  constructor(private moviesService: MoviesService) {}

  seeMovieDetails = (): void => {
      localStorage.setItem("movieSelected", JSON.stringify(this.movie));
      this.moviesService.selectMovie(this.movie);
  }

}
