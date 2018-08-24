import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title = 'Pokemon API';
	subtitle = "CI&T Angular 6 Training"

	constructor() { }

	ngOnInit() {
	}

}
