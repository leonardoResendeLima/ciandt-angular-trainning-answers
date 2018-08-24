import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PokemonService {

	constructor(private http: Http) { }

	public getPokemonList(link: string) {
		if (!link)
			link = environment.apiUrl.concat(environment.methods.getPokemonList);
		return this.http.get(link);
	}

	public getPokemonDetail(id: string) {
		let link: string = environment.apiUrl.concat(id, "/");
		return this.http.get(link);
	}
}
