import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies-service/movies.service';

@Component({
  selector: 'app-movies-result',
  templateUrl: './movies-result.component.html',
  styleUrls: ['./movies-result.component.scss']
})
export class MoviesResultComponent implements OnInit {
  contentToDisplay: string;
  headerTitle: string;
  moviesResult: Array<object>;
  searchError: string;
  valueSearched: string;

  constructor(private moviesService: MoviesService) {
      this.contentToDisplay = "";
      this.headerTitle = "";
      this.moviesResult = [];
      this.searchError = "";
      this.valueSearched = "";
  }

  ngOnInit(): void {
      const { valueToSearch, moviesResult, searchError } = this.moviesService;
      const storedValueSearched = localStorage.getItem("valueSearched");
      const storedMovies = localStorage.getItem("moviesStored");
      if (valueToSearch.length === 0) {
          if (storedValueSearched !== null) {
                this.valueSearched = storedValueSearched;
                this.headerTitle = `Resultados para "${storedValueSearched}"`;
          }
          else {
              this.valueSearched = valueToSearch;
              this.headerTitle = "Não há resultados para a busca.";
          }
      }
      else {
          localStorage.setItem("valueSearched", valueToSearch);
          this.valueSearched = valueToSearch;
          this.headerTitle = `Resultados para "${valueToSearch}"`;
      }
      if (moviesResult.length === 0) {
          if (localStorage.getItem("moviesStored") !== null) {
              const movies = JSON.parse(localStorage.getItem("moviesStored"));
              this.moviesResult = movies;
          }
          else this.moviesResult = moviesResult;
      }
      else {
          localStorage.setItem("moviesStored", JSON.stringify(moviesResult));
          this.moviesResult = moviesResult;
      }
      this.searchError = searchError;
      this.contentToDisplay = this.checkContentToDisplay({ valueToSearch: this.valueSearched, moviesResult: this.moviesResult, searchError: this.searchError });
  }

  checkContentToDisplay = (serviceData: any): string => {
      const { valueToSearch, moviesResult, searchError } = serviceData;
      if (valueToSearch.length === 0) {
          return "content-not-found";
      }
      if (valueToSearch.length > 0 && searchError.length > 0) {
          return "search-error";
      }
      if (moviesResult.length > 0) {
          const [ movie ] = moviesResult;
          if (movie.title.length > 0) {
              return "movies-result";
          }
          return "content-not-found"
      }
      else {
          if (localStorage.getItem("moviesStored") !== null) {
              return "movies-result";
          }
          return "content-not-found";
      }
  }

}
