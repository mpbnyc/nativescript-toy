import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { PlanetService } from "../planet-service/planet.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    planets: Array<any>;
    constructor(private planetService: PlanetService) {
        this.planetService.getPlanets().subscribe(data => {
            this.planets = data.json().results;
        });
    }

    ngOnInit(): void {
    }
}