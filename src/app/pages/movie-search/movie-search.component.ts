import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  loading: boolean;

  constructor(private moviesService: MoviesService) {
      this.loading = false;
  }

  searchMovies = (): void => {
      const { valueToSearch, search } = this.moviesService;
      if (valueToSearch.length > 0) {
          this.loading = true;
      }
      search();
  }
}
