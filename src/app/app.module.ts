import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { MoviesResultComponent } from './pages/movies-result/movies-result.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { RatingCategoryComponent } from './components/rating-category/rating-category.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    SearchInputComponent,
    ActionButtonComponent,
    MoviesResultComponent,
    MovieDetailsComponent,
    LoadingComponent,
    MovieCardComponent,
    RatingCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
