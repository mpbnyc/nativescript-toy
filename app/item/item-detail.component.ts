import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogService, ModalDialogParams, ModalDialogOptions } from 'nativescript-angular';
import { PlanetService } from "../planet-service/planet.service";
import { DialogContent } from "./dialog-content"
@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    planet: any;

    constructor(
        private planetService: PlanetService,
        private route: ActivatedRoute,
        private viewContainerRef: ViewContainerRef,
        private modalService: ModalDialogService
    ) { }

    ngOnInit(): void {
        this.planetService.getPlanets().subscribe(data => {
            let planetIndex = this.route.snapshot.params["id"];
            let planets = data.json().results;
            this.planet = planets[planetIndex];
        });
    }

    viewEditModal() {
        let options: ModalDialogOptions = {
            context: { planet: this.planet},
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };
        this.modalService.showModal(DialogContent, options);
    }
}
