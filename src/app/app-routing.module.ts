import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesResultComponent } from './pages/movies-result/movies-result.component';
import { MovieSearchComponent } from './pages/movie-search/movie-search.component';
import { MovieDetailsComponent } from "./pages/movie-details/movie-details.component";

const routes: Routes = [
    { path: "", redirectTo: "/movieSearch", pathMatch: "full" },
    { path: "movieSearch", component: MovieSearchComponent },
    { path: "moviesResult", component: MoviesResultComponent },
    { path: "movieDetails", component: MovieDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
