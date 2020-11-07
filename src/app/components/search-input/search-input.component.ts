import { Component, Input } from '@angular/core';
import { MoviesService } from '../../services/movies-service/movies.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  inputValue: string;
  debouncer: any;

  constructor(private moviesService: MoviesService) {
      this.inputValue = "";
  }

  onChangeText = (event): void => {
      clearTimeout(this.debouncer);
      this.debouncer = setTimeout(() => {
          this.moviesService.setValueToSearch(event.target.value);
      }, 200);
  }

}
