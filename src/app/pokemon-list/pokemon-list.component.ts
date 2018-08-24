import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service/pokemon.service';
import { Response } from "@angular/http";
import { Router } from '@angular/router';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css'],
	providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
	pokemonsList: any[];
	nextList: string;
	previousList: string;
	count: number

	constructor(private service: PokemonService, private router: Router) { }

	ngOnInit() {
		this.requestHttpService()
	}

	onRequestNewOffset(link: string) {
		this.requestHttpService(link)
	}

	requestHttpService(link?: string): void {
		this.service.getPokemonList(link).subscribe(
			(response: Response) => {
				const data = response.json();
				this.pokemonsList = data.results;
				this.nextList = data.next;
				this.previousList = data.previous;
				this.count = data.count;
			},
			(error) => console.log(error)
		)
	}
	goToDetails(link: string) {
		let newLink = link.split("/").reverse().filter(v => v != '')[0];
		this.router.navigate(['/pokemonDetails', newLink]);
	}
}

export interface PokemonList {
	count: number,
	results: any[],
	previous: string,
	next: string
}
