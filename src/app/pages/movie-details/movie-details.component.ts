import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies-service/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  castText: string;
  contentToDisplay: string;
  movieSelected: any;

  constructor(private moviesService: MoviesService) {
      this.castText = "";
      this.contentToDisplay = "";
      this.movieSelected = null;
  }

  ngOnInit(): void {
      const { movieSelected } = this.moviesService;
      if (movieSelected === null) {
          const storedMovieSelected = localStorage.getItem("movieSelected");
          if (storedMovieSelected !== null) {
              this.movieSelected = JSON.parse(storedMovieSelected);
              this.contentToDisplay = "movie-details";
              const movieCast = this.movieSelected.cast.slice(0, 5);
              if (movieCast.length > 0) {
                  movieCast.forEach((character, index) => {
                      if (index === movieCast.length - 1) {
                          this.castText += "e outros.";
                      }
                      else this.castText += `${movieCast[index].actor}, `;
                  })
              }
              else this.castText = "Sem informação dos atores."
          }
          else this.contentToDisplay = "no-movie-selected";
      }
      else {
          this.movieSelected = movieSelected;
          this.contentToDisplay = "movie-details";
          const movieCast = this.movieSelected.cast.slice(0, 5);
          if (movieCast.length > 0) {
              movieCast.forEach((character, index) => {
                  if (index === movieCast.length - 1) {
                      this.castText += "e outros.";
                  }
                  else this.castText += `${movieCast[index].actor}, `;
              })
          }
          else this.castText = "Sem informação dos atores.";
      }
  }

  rateMovie = (): void => {
      alert("Feito, obrigado por contribuir na avaliação deste filme.");
  }

}
