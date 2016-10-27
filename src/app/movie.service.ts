import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MoviesComponent } from './movies/movies.component'

@Injectable()
export class MovieService {
	private API_KEY: string = '42b3e60b6636f50062f6d3579100d83f';

	constructor(private _http: Http) {}

	// Search For movies
	getMovies(movie): Observable<MoviesComponent[]> {
		const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${movie}`;  // URL to web api

		// ...using get request
		return this._http.get(movieUrl)
		// ...and calling .json() on the response to return data
			.map((res: Response) => res.json())
			//...errors if any
			.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

	}
}
