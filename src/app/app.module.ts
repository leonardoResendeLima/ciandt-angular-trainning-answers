import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-list/pokemon-detail/pokemon-detail.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}, {
		path: 'pokemonList',
		component: PokemonListComponent
	}, {
		path: 'pokemonDetails/:id',
		component: PokemonDetailComponent
	}
	// , {
	// 	path: '**',
	// 	component: NotFoundComponent
	// },

];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		PokemonListComponent,
		PokemonDetailComponent
	],
	imports: [
		HttpModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent],
	exports: [RouterModule]
})
export class AppModule { }
