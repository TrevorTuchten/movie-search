import {Component} from '@angular/core';

import {MovieService} from '../movie.service'

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.sass'],
	providers: [MovieService]
})
export class MoviesComponent {

	getMovies: any;
	movies: any;
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
					this.getMovies = response;
					this.movies = this.getMovies.results;
					this.noResults = false;
					/*Display error if not movies match*/
					if (!this.movies.length) {
						this.noResults = true;
						this.noShow = 'There were no movies found'
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
