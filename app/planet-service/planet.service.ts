import { Injectable } from '@angular/core';
import { NSHttp } from 'nativescript-angular';
import { Http } from '@angular/http';

@Injectable()
export class PlanetService {
	constructor(private http: Http) { }// URL to web API
	getPlanets() {
        return this.http.get('https://swapi.co/api/planets');
    }
}