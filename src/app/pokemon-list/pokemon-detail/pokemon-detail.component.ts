import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { PokemonService } from '../../../services/pokemon-service/pokemon.service';

@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './pokemon-detail.component.html',
	styleUrls: ['./pokemon-detail.component.css'],
	providers: [PokemonService]
})
export class PokemonDetailComponent implements OnInit {
	id: string;
	pokemonData: any;

	constructor(private route: ActivatedRoute, private router: Router, private service: PokemonService) {
		// Retrieving id parameter
		this.route.params.subscribe(res => {
			if (!res.id)
				this.router.navigate(['']);
			else
				this.id = res.id;
		})
	}

	ngOnInit() {
		this.service.getPokemonDetail(this.id).subscribe(
			(response: Response) => {
				const data = response.json();
				this.pokemonData = data;
				console.log(this.pokemonData);
			},
			(error) => console.log(error)
		)
	}

}
