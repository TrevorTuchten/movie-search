import {Component} from '@angular/core';

import {MovieService} from '../movie.service'

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.sass'],
	providers: [MovieService],
})
export class MoviesComponent {

	// container variables
	getMovies: any;
	movies: any;

	//Dom manipulation variables
	noShow: string;
	noResults: boolean;
	moviesToShow: any;

	movieSearch(movie: string) {
		this.loadMovies(movie);
	}

	constructor( private _movieService: MovieService) {}

	loadMovies(movie){

		// Get Matching Movies
		this._movieService.getMovies(movie)
			.subscribe(
				response => {

					// Store the GET response
					this.getMovies = response;

					// perform manipulation on response
					this.movies = this.getMovies.results;
					this.noResults = false;

					// Display error if no movies match
					if (!this.movies.length) {
						this.noResults = true;
						this.noShow = 'There were no movies found'

					// load results for Dom
					} else {
						this.moviesToShow = this.getMovies.results;
					}
				},
				err => {
					// Log errors if any
					console.log(err);
				});
	}
}
