import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiHost: string;
  apiKey: string;
  baseURL: string;
  movieSelected: any;
  moviesResult: Array<any>;
  searchError: string;
  valueToSearch: string;

  constructor(private router: Router) {
      this.apiHost = "imdb-internet-movie-database-unofficial.p.rapidapi.com";
      this.apiKey = "4cdc63003dmsh71913c735b8246ep153dc4jsn9d18537b0dfb";
      this.baseURL = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film";
      this.movieSelected = null;
      this.moviesResult = [];
      this.searchError = "";
      this.valueToSearch = "";
  }

  search = () => {
      if (this.valueToSearch.length > 0) {
          const options: AxiosRequestConfig = {
              method: "GET",
              url: `${this.baseURL}/${this.valueToSearch}`,
              headers: {
                  "x-rapidapi-host": this.apiHost,
                  "x-rapidapi-key": this.apiKey
              }
          };
          axios(options)
            .then((response: any) => {
                this.moviesResult = [response.data];
                this.router.navigate(['moviesResult']);
            })
            .catch((error: Error) => {
                this.searchError = "Ocorreu um erro na busca, por favor, tente novamente.";
                this.router.navigate(['moviesResult']);
            });
      }
      else alert("Você deixou o campo vazio!");
  }

  selectMovie = (movieSelected: any): void => {
      this.movieSelected = movieSelected;
      this.router.navigate(["movieDetails"]);
  }

  setValueToSearch = (value): void => {
      this.valueToSearch = value;
  }
}
