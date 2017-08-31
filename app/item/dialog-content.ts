import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ModalDialogService, ModalDialogParams, ModalDialogOptions } from 'nativescript-angular';
@Component({
    selector: "modal-content",
    template: `
    <DockLayout margin="12" verticalAlignment="center" height="100%" stretchLastChild="true">
        <StackLayout dock="top">
            <Label class="h2" text="Edit Planet"></Label>
        </StackLayout>
        <StackLayout dock="bottom" orientation="horizontal">
            <Button height="75" width="50%" text="cancel" (onTap)="close('Cancel')"></Button>
            <Button height="75" width="100%" text="save" (onTap)="save({id: id, date: date, time: time, description: description, trip: trip})"></Button>
        </StackLayout>
        <StackLayout height="auto">
            <TextField margin="10" [hint]="planet.name" [value]="planet.name"></TextField>
            <TextField margin="10" [hint]="planet.climate" [value]="planet.climate"></TextField>
            <TextField margin="10" [hint]="planet.terrain" [value]="planet.terrain"></TextField>
        </StackLayout>
    </DockLayout>
  `
})
export class DialogContent {
    public planet: any;
    public date: string;
    public time: string;
    public description: string;
    public trip: string;
    public id: string;
    constructor(private params: ModalDialogParams) {
        this.planet = params.context.planet;
    }

    public save (event) {
        this.close('save');
    }

    public close(result: string) {
        this.params.closeCallback(result);
    }
}