import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import {AppComponent} from './app.component';
import {MoviesComponent} from './movies/movies.component';

@NgModule({
	declarations: [
		AppComponent,
		MoviesComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AlertModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
